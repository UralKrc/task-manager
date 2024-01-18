import { TaskItemType } from "../views/TaskManagement/types";

export type TaskContextProps = {
  tasks: TaskItemType[];
  setTasks: (tasks: TaskItemType[]) => void;
};
