import { Task as TTask } from "../../helpers/types";
import Button from "../Button";
import { Description, Name, TaskItem, TaskList, ButtonWrapper } from "./styles";

const Tasks = ({
  tasks,
  editTask,
  deleteTask,
}:
{
  tasks: TTask[];
  editTask: (item: number) => void;
  deleteTask: (item: number) => void;
}) => {
  return (
   <TaskList>
      {tasks.map((task, index) => (
        <TaskItem key={index}>
          <Name>{task.name}</Name>
          <Description>{task.description}</Description>
          <ButtonWrapper>
            <Button variant="primary" onClick={() => editTask(index)} label="Edit" />
            <Button variant="secondary" onClick={() => deleteTask(index)} label="Delete" />
          </ButtonWrapper>
        </TaskItem>
      ))}
    </TaskList>
  )
}

export default Tasks;