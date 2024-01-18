import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskItemType } from '../../../views/TaskManagement/types';
import TaskItem from '..';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import { TaskProvider } from '../../../contexts/TaskContext';
import { useSupabase } from '../../../hooks/useSupabase';

jest.mock('../../../hooks/useSupabase');

describe('TaskItem', () => {
  beforeEach(() => {
    (useSupabase as jest.Mock).mockReturnValue({
      deleteData: jest.fn(),
    });
  });

  it('renders task', () => {
    const mockTask: TaskItemType = { id: 1, name: 'Test Task', description: 'Test Description' };

    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskItem task={mockTask} />
        </TaskProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('opens delete modal on delete button click', async () => {
    const mockTask: TaskItemType = { id: 1, name: 'Test Task', description: 'Test Description' };

    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskItem task={mockTask} />
        </TaskProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Delete'));

    expect(screen.getByText('Are you sure you want to delete this task?')).toBeInTheDocument();
  });

  it('opens edit modal on edit button click', async () => {
    const mockTask: TaskItemType = { id: 1, name: 'Test Task', description: 'Test Description' };

    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskItem task={mockTask} />
        </TaskProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Edit'));

    expect(screen.getByText('Edit Task')).toBeInTheDocument();
  });
});