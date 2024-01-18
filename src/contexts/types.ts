import { TaskItemType } from "../views/TaskManager/types";

export type TaskContextProps = {
  tasks: TaskItemType[];
  setTasks: (tasks: TaskItemType[]) => void;
};
