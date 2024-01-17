import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../index';
import TaskContext from '../../../contexts/TaskContext';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';

describe('TaskList', () => {
  test('renders TaskList with tasks', () => {
    const mockTasks = {
      tasks: [{ id: 1, name: 'Test Task', description: 'Test Description' }],
      addTask: jest.fn(),
      deleteTask: jest.fn(),
      editTask: jest.fn(),
    };
  
    render(
      <ThemeProvider theme={theme}>
        <TaskContext.Provider value={mockTasks}>
          <TaskList />
        </TaskContext.Provider>
      </ThemeProvider>
    );
  
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});