import React, { createContext, useReducer } from "react";
import { TaskItemType } from "../views/TaskManager/types";
import { TaskContextProps } from "./types";

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export type TaskProviderProps = {
  children: React.ReactNode;
}

type Action = { type: "set"; payload: TaskItemType[] };

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    (state: TaskItemType[], action: Action): TaskItemType[] => {
      switch (action.type) {
        case "set":
          return action.payload;
        default:
          return state;
      }
    },
    []
  );

  const taskContextValue = {
    tasks,
    setTasks: (newTasks: TaskItemType[]) =>
      dispatch({ type: "set", payload: newTasks }),
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
