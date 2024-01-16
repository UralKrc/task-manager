import { Backdrop, ButttonWrapper, CloseButton, SecondaryAction, Title } from './styles';
import TaskForm from '../TaskForm';
import { motion } from 'framer-motion';
import Button from '../Button';

const Modal = ({ 
  handleClose, 
  taskId,
  handleSecondaryButtonClick,
  isEditMode = false, 
  secondaryActionTitle,
} : { 
  handleClose: () => void; 
  taskId: number;
  handleSecondaryButtonClick: () => void;
  isEditMode?: boolean;
  secondaryActionTitle: string;
}) => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
       <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="modal"
      >
        <ButttonWrapper>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </ButttonWrapper>
        {
          isEditMode ? 
            <TaskForm 
              title="Edit Task"
              subtitle="Please edit the task name or description."
              buttonLabel="Edit task"
              successMessage="Task edited successfully!"
              isEditMode 
              taskId={taskId}
              handleClose={handleClose}
            /> 
            : 
            (
              <SecondaryAction>
                <Title>{secondaryActionTitle}</Title>
                <Button variant="secondary" onClick={handleSecondaryButtonClick} label="Delete" />
              </SecondaryAction>
            )
        }
      </motion.div>
    </Backdrop>
  );
}

export default Modal;