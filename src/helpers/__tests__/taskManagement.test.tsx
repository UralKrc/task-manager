import { addTask, deleteTask, editTask } from '../taskManagement';

describe('Task Management', () => {
  const mockTask = { id: 1, name: 'Test Task' };
  const updatedTask = { id: 1, name: 'Updated Task' };

  it('should add a task', () => {
    const tasks = addTask(null, mockTask);
    expect(tasks).toEqual([mockTask]);
  });

  it('should delete a task', () => {
    const tasks = addTask(null, mockTask);
    const updatedTasks = deleteTask(tasks, mockTask.id);
    expect(updatedTasks).toEqual([]);
  });

  it('should edit a task', () => {
    const tasks = addTask(null, mockTask);
    const updatedTasks = editTask(tasks, mockTask.id, updatedTask);
    expect(updatedTasks[0]).toEqual(updatedTask);
  });
});