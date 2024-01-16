import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Modal from "../Modal";
import { Description, TaskInfo, Name, ButtonWrapper, Task } from "./styles";
import { TaskItem as Type } from "../../views/TaskManagement/types";

const TaskItem = ({
  task,
  handleEditButtonClick,
  handleDeleteButtonClick
}:
{
  task: Type;
  handleEditButtonClick: (tasks: Type[], id: number, updatedTask: Type) => void;
  handleDeleteButtonClick: (id: number) => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  const { id, name, description } = task;

  const showModalByStatus = (status: string) => {
    setShowModal(true);
    if (status === 'edit') {
      setEditMode(true);
    } else {
      setEditMode(false)
    }
  };

  return (
    <>
      <Task>
        <TaskInfo>
          <Name>{name}</Name>
          <Description><b>Description:</b> {description}</Description>
        </TaskInfo>
        <ButtonWrapper>
          <Button variant="primary" onClick={() => showModalByStatus('edit')} label="Edit" />
          <Button variant="secondary" onClick={() => showModalByStatus('delete')} label="Delete" />
        </ButtonWrapper>
      </Task>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
      {showModal && 
        <Modal 
          isEditMode={isEditMode}
          secondaryActionTitle="Are you sure you want to delete this task?"
          handleClose={() => setShowModal(false)} 
          handleEditButtonClick={() => handleEditButtonClick(id, task)} 
          handleDeleteButtonClick={() => handleDeleteButtonClick(id)} 
        />
      }
      </AnimatePresence>
    </>
  )
}

export default TaskItem;