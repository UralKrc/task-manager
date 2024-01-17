import { TaskItem as Task } from "../views/TaskManagement/types";

export type TaskContextProps = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, updatedTask: Task) => void;
}