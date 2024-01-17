import { render, fireEvent } from '@testing-library/react';
import { TaskItem } from '../../views/TaskManagement/types';
import TaskContext, { TaskProvider } from '../TaskContext';

describe('TaskProvider', () => {
  it('should add, edit, and delete a task', () => {
    const { getByTestId } = render(
      <TaskProvider>
        <TaskContext.Consumer>
          {(context) => (
            <div>
              <button
                data-testid="add-task"
                onClick={() => context?.addTask({ id: 1, name: 'Test Task' } as TaskItem)}
              >
                Add Task
              </button>
              <button
                data-testid="edit-task"
                onClick={() => context?.editTask(1, { id: 1, name: 'Updated Task' } as TaskItem)}
              >
                Edit Task
              </button>
              <button
                data-testid="delete-task"
                onClick={() => context?.deleteTask(1)}
              >
                Delete Task
              </button>
              <div data-testid="tasks">{JSON.stringify(context?.tasks)}</div>
            </div>
          )}
        </TaskContext.Consumer>
      </TaskProvider>
    );

    fireEvent.click(getByTestId('add-task'));
    expect(getByTestId('tasks').textContent).toBe(JSON.stringify([{ id: 1, name: 'Test Task' }]));

    fireEvent.click(getByTestId('edit-task'));
    expect(getByTestId('tasks').textContent).toBe(JSON.stringify([{ id: 1, name: 'Updated Task' }]));

    fireEvent.click(getByTestId('delete-task'));
    expect(getByTestId('tasks').textContent).toBe(JSON.stringify([]));
  });
});