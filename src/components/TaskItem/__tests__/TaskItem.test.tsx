import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskItem from '../index';
import { ThemeProvider } from 'styled-components';
import { useTasks } from '../../../hooks/useTasks';
import TaskContext from '../../../contexts/TaskContext';
import theme from '../../../styles/themes/default';

jest.mock('../../../hooks/useTasks');
jest.mock('../../Modal', () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div>Mock Modal</div>),
  };
});

describe('TaskItem', () => {
  test('renders TaskItem with task details and handles delete click', () => {
    const mockTask = { id: 1, name: 'Test Task', description: 'Test Description' };
    const deleteTask = jest.fn();
    const addTask = jest.fn();
    const editTask = jest.fn();

    const value = {
      tasks: [mockTask],
      addTask,
      deleteTask,
      editTask,
    };

    (useTasks as jest.Mock).mockReturnValue(value);

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <TaskContext.Provider value={value}>
          <TaskItem task={mockTask} />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    expect(getByText('Test Task')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();

    fireEvent.click(getByText('Delete'));
    expect(getByText('Mock Modal')).toBeInTheDocument();
  });
});