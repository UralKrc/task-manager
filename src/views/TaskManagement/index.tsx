import { useEffect } from "react";
import { useSupabase } from "../../hooks/useSupabase";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { Container, ErrorContainer, Subtitle, Title } from "./styles";

const TaskManager = () => {
  const { getData, loading, error } = useSupabase("tasks");

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {error ? (
        <ErrorContainer>
          <Notification
            type="error"
            label="Unexpected error. Please reload the page."
          />
        </ErrorContainer>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
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
          )}
        </>
      )}
    </Container>
  );
};

export default TaskManager;
