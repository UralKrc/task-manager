import { useTasks } from "../../hooks/useTasks";
import { TaskItemType } from "../../views/TaskManagement/types";
import TaskItem from "../TaskItem";
import { Tasks, Title, Container, EmptyState, EmptyStateText } from "./styles";


const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <Tasks>
      <Title>Task List</Title>
        <Container>
          {
            tasks.length === 0 && (
              <EmptyState>
                <EmptyStateText>No tasks found. Please add new task to start.</EmptyStateText>
              </EmptyState>)
          }
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