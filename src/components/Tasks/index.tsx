import { TaskItem } from "../../constants/types";
import Button from "../Button";
import { Description, Name, Task, TaskList, ButtonWrapper, Title, Container } from "./styles";

const Tasks = ({
  tasks,
  editTask,
  deleteTask,
}:
{
  tasks: TaskItem[];
  editTask: (item: number) => void;
  deleteTask: (item: number) => void;
}) => {
  return (
   <TaskList>
     <Title>Task List</Title>
      <Container>
        {tasks.map((task, index) => (
          <Task key={index}>
            <Name>{task.name}</Name>
            <Description>{task.description}</Description>
            <ButtonWrapper>
              <Button variant="primary" onClick={() => editTask(index)} label="Edit" />
              <Button variant="secondary" onClick={() => deleteTask(index)} label="Delete" />
            </ButtonWrapper>
          </Task>
        ))}
      </Container>
   </TaskList>
  )
}

export default Tasks;