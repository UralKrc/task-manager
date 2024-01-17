import { useEffect } from "react";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { Container, ErrorContainer, Subtitle, Title } from "./styles";
import { TaskItem } from "./types";
import { useTasks } from "../../hooks/useTasks";

const TaskManager = () => {
  const URL = 'https://mocki.io/v1/7bb16676-2943-4982-83a6-09c3169c0fd4';

  const {
    data,
    loading,
    error,
  } = useFetch<TaskItem[]>(URL)

  const { addTask } = useTasks();

  useEffect(() => {
    if (data) {
      data.forEach(task => addTask(task));
    }
  }, [data]);

  return (
    <Container>
      {
        error ? (
          <ErrorContainer>
            <Notification type="error" label="Unexpected error. Please reload the page." />
          </ErrorContainer>
        ) : (
          <>
            {
              loading ? 
                <Loader />
                : 
              (
                <>
                  <Title>Welcome to Task Manager</Title>
                  <Subtitle>You can add, edit or delete task.</Subtitle>
                  <TaskForm 
                    title="Add Task"
                    subtitle="Please enter the task name and description to create a new task."
                    buttonLabel="Add task"
                    successMessage="Task added successfully!"
                  />
                  <TaskList />
                </>
              )
            }
          </>
        )
      }
    </Container>
  );
};

export default TaskManager;