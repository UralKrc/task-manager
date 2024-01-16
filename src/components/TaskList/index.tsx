import { TaskItem as Type } from "../../views/TaskManagement/types";
import { Tasks, Title, Container } from "./styles";
import TaskItem from "../TaskItem";

const TaskList = ({
  tasks,
  handleEditTask,
  handleDeleteTask,
}:
{
  tasks: Type[];
  handleEditTask: (tasks: Type[], item: number, updatedTask: Type) => void;
  handleDeleteTask: (item: number) => void;
}) => {
  const handleEditButtonClick = (id: number) => {
    handleEditTask(tasks, id, updatedTask);
  }
  
  const handleDeleteButtonClick = (id: number) => {
    handleDeleteTask(id)
  }

  console.log(tasks, 'tasks');
  return (
    <>
      <Tasks>
        <Title>Task List</Title>
          <Container>
            {tasks.map((task) => (
              <TaskItem
                key={task.id} 
                task={task}
                handleEditButtonClick={() => handleEditButtonClick(task.id)} 
                handleDeleteButtonClick={handleDeleteButtonClick} 
              />
            ))}
          </Container>
      </Tasks>
    </>
  )
}

export default TaskList;