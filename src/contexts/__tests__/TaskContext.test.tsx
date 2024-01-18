import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useContext, useEffect } from 'react';
import TaskContext, { TaskProvider } from '../TaskContext';
import { TaskItemType } from '../../views/TaskManager/types';

describe('TaskProvider', () => {
  it('updates tasks when setTasks is called', () => {
    const TestComponent = () => {
      const context = useContext(TaskContext);
      const { tasks, setTasks } = context || { tasks: [], setTasks: () => {} };
      const newTasks: TaskItemType[] = [{ id: 1, name: 'Test Task', description: 'Test Description' }];
    
      useEffect(() => {
        if (tasks.length === 0) {
          setTasks(newTasks);
        }
      }, [tasks, setTasks]);
    
      return <div>{tasks.length > 0 ? tasks[0].name : 'No tasks'}</div>;
    };

    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});