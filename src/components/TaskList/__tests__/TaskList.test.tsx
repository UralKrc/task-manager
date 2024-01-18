import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskItemType } from '../../../views/TaskManager/types';
import TaskList from '..';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import { TaskProvider } from '../../../contexts/TaskContext';
import { useTasks } from '../../../hooks/useTasks';

jest.mock('../../../hooks/useTasks');

describe('TaskList', () => {
  it('renders tasks', () => {
    const mockTasks: TaskItemType[] = [
      { id: 1, name: 'Test Task 1', description: 'Test Description 1' },
      { id: 2, name: 'Test Task 2', description: 'Test Description 2' },
    ];

    (useTasks as jest.Mock).mockReturnValue({
      tasks: mockTasks,
    });

    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskList />
        </TaskProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
  });
});