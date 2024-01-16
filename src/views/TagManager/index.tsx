import { useEffect, useState } from "react";
import { Container, ErrorContainer, Subtitle, Title } from "./styles";
import Tasks from "../../components/Tasks";
import Form from "../../components/Form";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { addTask, deleteTask, editTask } from "../../helpers/taskManagement";
import { TaskItem } from "./types";
import Message from "../../components/Message";

const TagManager = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const URL = 'https://mocki.io/v1/0d06cad8-e233-459c-badf-54f8c1026cc7';

  const {
    data,
    loading,
    error,
  } = useFetch<TaskItem[]>(URL)

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  const handleAdd = (newTask: TaskItem) => {
    setTasks(addTask(tasks, newTask));
  };

  const handleDelete = (id: number) => {
    setTasks(deleteTask(tasks, id));
  };

  const handleEdit = (id: number, updatedTask: TaskItem) => {
    setTasks(editTask(tasks, id, updatedTask));
  };


  return (
    <Container>
      {
        error ? (
          <ErrorContainer>
            <Message type="error" label="Unexpected error. Please reload the page." />
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
                  <Form onSubmit={handleAdd} />
                  <Tasks tasks={tasks} deleteTask={handleDelete} editTask={handleEdit} />
                </>
              )
            }
          </>
        )
      }
    </Container>
  );
};

export default TagManager;