import React, { createContext, useReducer } from 'react';
import { addTask, deleteTask, editTask } from '../helpers/taskManagement';
import { TaskItem as Task } from '../views/TaskManagement/types';

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, updatedTask: Task) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
  children: React.ReactNode;
}

type Action = 
  | { type: 'add'; payload: Task }
  | { type: 'delete'; payload: number }
  | { type: 'edit'; payload: { id: number; updatedTask: Task } };

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, dispatch] = useReducer((state: Task[], action: Action): Task[] => {
    switch (action.type) {
      case 'add':
        return addTask(state, action.payload);
      case 'delete':
        return deleteTask(state, action.payload);
      case 'edit':
        return editTask(state, action.payload.id, action.payload.updatedTask);
      default:
        return state;
    }
  }, []);

  const taskContextValue = {
    tasks,
    addTask: (task: Task) => dispatch({ type: 'add', payload: task }),
    deleteTask: (id: number) => dispatch({ type: 'delete', payload: id }),
    editTask: (id: number, updatedTask: Task) => dispatch({ type: 'edit', payload: { id, updatedTask } }),
  };

  return <TaskContext.Provider value={taskContextValue}>{children}</TaskContext.Provider>;
};

export default TaskContext;