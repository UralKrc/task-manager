import { useTasks } from "../../hooks/useTasks";
import { TaskItemType } from "../../views/TaskManagement/types";
import TaskItem from "../TaskItem";
import { Tasks, Title, Container } from "./styles";


const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <Tasks>
      <Title>Task List</Title>
        <Container>
          {tasks.map((task: TaskItemType) => (
            <TaskItem
            key={task.id}
              task={task}
            />
          ))}
        </Container>
    </Tasks>
  )
}

export default TaskList;