import { useEffect, useState } from "react";
import { Container, ErrorContainer, Subtitle, Title } from "./styles";
import Tasks from "../../components/Tasks";
import Form from "../../components/Form";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { TaskItem } from "../../constants/types";
import { addTask, deleteTask, editTask } from "../../helpers/taskManagement";

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
    setTasks(addTask(data, newTask));
  };

  const handleDelete = (index: number) => {
    setTasks(deleteTask(data, index));
  };

  const handleEdit = (index: number, updatedTask: TaskItem) => {
    setTasks(editTask(data, index, updatedTask));
  };

console.log(tasks, 1);
  return (
    <Container>
      {
        error ? (
          <ErrorContainer>
            <ErrorMessage label="Unexpected error. Please reload the page." />
          </ErrorContainer>
        ) : (
          <>
            {
              loading ? 
              (
                <Loader />
              )
                : 
              (
                <>
                  <Title>Welcome to Task Manager</Title>
                  <Subtitle>You can add, edit or delete task.</Subtitle>
                  <Form  addTask={handleAdd} />
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