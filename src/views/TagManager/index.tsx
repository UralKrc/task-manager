import { useEffect, useState } from "react";
import { Container, Subtitle, Title } from "./styles";
import { Task as TTask } from "../../helpers/types";
import Tasks from "../../components/Tasks";
import Form from "../../components/Form";

const TagManager = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);

  const fetchData = async () => {
    const URL = 'https://mocki.io/v1/0d06cad8-e233-459c-badf-54f8c1026cc7';
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setTasks(result.localTags);
    } catch(err) {
      console.log('Something went wrong: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = () => {
    console.log('edit');
  }

  return (
    <Container>
      <Title>Welcome to Task Manager</Title>
      <Subtitle>You can add, edit or delete task.</Subtitle>
      <Form />
      {/* <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} required />
        <button type="submit">{editIndex !== null ? 'Edit Tag' : 'Add Tag'}</button>
      </form> */}
      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </Container>
  );
};

export default TagManager;