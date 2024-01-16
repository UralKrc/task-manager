import { TaskItem as Task } from "../../views/TaskManagement/types";
import { Tasks, Title, Container } from "./styles";
import TaskItem from "../TaskItem";
import { useTasks } from "../../hooks/useTasks";

const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <>
      <Tasks>
        <Title>Task List</Title>
          <Container>
            {tasks.map((task: Task) => (
              <TaskItem
                task={task}
              />
            ))}
          </Container>
      </Tasks>
    </>
  )
}

export default TaskList;