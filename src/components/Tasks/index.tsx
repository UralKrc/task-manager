import { useState } from "react";
import { TaskItem } from "../../views/TagManager/types";
import Button from "../Button";
import Modal from "../Modal";
import { Description, Name, Task, TaskList, ButtonWrapper, Title, Container } from "./styles";
import { AnimatePresence } from "framer-motion";

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
  const [showModal, setShowModal] = useState(false);

  const handlePrimaryButtonClick = (id: number) => {
    editTask(id);
    setShowModal(false);
  }
  console.log(tasks);
  return (
   <TaskList>
     <Title>Task List</Title>
      <Container>
        {tasks.map((task, index) => (
          <Task key={index}>
            <Name>{task.name}</Name>
            <Description>{task.description}</Description>
            <ButtonWrapper>
              <Button variant="primary" onClick={() => setShowModal(true)} label="Edit" />
              <Button variant="secondary" onClick={() => deleteTask(task.id)} label="Delete" />
            </ButtonWrapper>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
              >
              {showModal && <Modal handleClose={() => setShowModal(false)} handlePrimaryButtonClick={() => handlePrimaryButtonClick(task.id)} />}
            </AnimatePresence>
          </Task>
        ))}
      </Container>
   </TaskList>
  )
}

export default Tasks;