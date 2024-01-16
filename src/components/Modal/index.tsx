import { Backdrop, ButttonWrapper, CloseButton } from './styles';
import Form from '../Form';
import { motion } from 'framer-motion';

const Modal = ({ 
  handleClose, 
  handlePrimaryButtonClick 
} : { 
  handleClose: () => void; 
  handlePrimaryButtonClick?: () => void;
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
        <Form isEditMode onSubmit={handlePrimaryButtonClick} />
      </motion.div>
    </Backdrop>
  );
}

export default Modal;