import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TaskItemType } from "../../views/TaskManager/types";
import Button from "../Button";
import Modal from "../Modal";
import { Description, TaskInfo, Name, ButtonWrapper, Task } from "./styles";
import { useSupabase } from "../../hooks/useSupabase";

const TaskItem = ({ task }: { task: TaskItemType }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  const { id, name, description } = task;
  const { deleteData: deleteTask } = useSupabase("tasks");

  const showModalByStatus = (status: string) => {
    setShowModal(true);
    if (status === "edit") {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  };

  const handleSubmit = async () => {
    await deleteTask(id);
    setShowModal(false);
  };

  return (
    <>
      <Task>
        <TaskInfo>
          <Name>{name}</Name>
          <Description>
            <b>Description:</b> {description}
          </Description>
        </TaskInfo>
        <ButtonWrapper>
          <Button variant="primary" onClick={() => showModalByStatus("edit")}>
            Edit
          </Button>
          <Button
            variant="secondary"
            onClick={() => showModalByStatus("delete")}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </Task>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showModal && (
          <Modal
            isEditMode={isEditMode}
            secondaryActionTitle="Are you sure you want to delete this task?"
            handleClose={() => setShowModal(false)}
            handleSecondaryButtonClick={handleSubmit}
            taskId={id}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default TaskItem;
