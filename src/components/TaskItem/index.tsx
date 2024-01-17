import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Modal from "../Modal";
import { Description, TaskInfo, Name, ButtonWrapper, Task } from "./styles";
import { TaskItem as Type } from "../../views/TaskManagement/types";
import { useTasks } from "../../hooks/useTasks";

const TaskItem = ({
  task,
}:
{
  task: Type;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  const { id, name, description } = task;
  const { deleteTask } = useTasks();
  

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
          <Button variant="primary" onClick={() => showModalByStatus('edit')}>Edit</Button>
          <Button variant="secondary" onClick={() => showModalByStatus('delete')}>Delete</Button>
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
          handleSecondaryButtonClick={() => { deleteTask(id); setShowModal(false); }}
          taskId={id}
        />
      }
      </AnimatePresence>
    </>
  )
}

export default TaskItem;