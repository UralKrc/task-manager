import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '../index';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import TaskContext from '../../../contexts/TaskContext';
import { useTasks } from '../../../hooks/useTasks';

jest.mock('../../../hooks/useTasks');

describe('TaskForm', () => {
  test('renders TaskForm with form fields and button', () => {
    const mockTask = { id: 1, name: 'Test Task', description: 'Test Description' };
    const addTask = jest.fn();
    const deleteTask = jest.fn();
    const editTask = jest.fn();

    const value = {
      tasks: [mockTask],
      addTask,
      deleteTask,
      editTask,
    };

    (useTasks as jest.Mock).mockReturnValue(value);

    render(
      <ThemeProvider theme={theme}>
        <TaskContext.Provider value={value}>
          <TaskForm 
            title="Test Title"
            subtitle="Test Subtitle"
            buttonLabel="Test Button"
            successMessage="Success"
          />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });
});