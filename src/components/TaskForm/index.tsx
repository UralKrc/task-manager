import { useEffect, useState } from 'react';
import { formConfiguration } from '../../helpers/formConfiguration';
import Button from '../Button';
import { Container, InputContainer, Label, Form, Subtitle, Title } from './styles';
import Input from '../Input';
import Notification from '../Notification';
import { initialFormState } from '../../helpers/initialFormState';
import { FormState } from './types';
import { useTasks } from '../../hooks/useTasks';

const TaskForm = (
  { 
    taskId, 
    isEditMode = false,
    title,
    subtitle,
    buttonLabel,
    successMessage,
    handleClose,
  } : 
  { 
    title: string;
    subtitle: string;
    buttonLabel: string; 
    successMessage: string;
    taskId?: number;
    isEditMode?: boolean;
    handleClose?: () => void,
  }) => {
  const { addTask, editTask } = useTasks();
  const [formState, setFormState] = useState(initialFormState);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    constructFormState();
  }, []);

  const constructFormState = () => {
    const preparedObj: FormState = {};
    formConfiguration.forEach((el) => {
      preparedObj[el.stateField] = {
        value: el.stateDefault,
        error: null,
      };
    });

    setFormState(preparedObj);
  };

  const onChangeHandler = (field: string, value: string) => {
    setFormState({
      ...formState,
      [field]: {
        value: value,
        error: null,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = handleFormValidations();

    if (hasErrors) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000)

    if (isEditMode && taskId !== undefined) {
      editTask(taskId,{
        id: taskId,
        name: formState.name.value,
        description: formState.description.value,
      });
    } else {
      addTask({
        id: Date.now(),
        name: formState.name.value,
        description: formState.description.value,
      });

      setFormState({
        ...formState,
        name: { ...formState.name, value: '' },
        description: { ...formState.description, value: '' },
      });
    }

    if (handleClose) {
      handleClose();
    }
  };

  const handleFormValidations = () => {
    const updatedState = { ...formState };
    let error = false;

    const { name, description } =
      updatedState;
    if (name.value?.length < 3) {
      updatedState.name.error =
        'Name cannot be less than 3 characters.';
      error = true;
    }
    if (description.value?.length < 3) {
      updatedState.description.error =
        'Description cannot be less than 3 characters.';
      error = true;
    }

    setFormState({
      ...formState,
      ...updatedState,
    });

    return error;
  };

  return (
    <>
      <Title>{title}</Title>
      <Container isEditMode={isEditMode}>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          {formConfiguration.map((el, idx) => (
            <InputContainer key={`form-element-${idx}`}>
              <Label>{el.label}:</Label>
              <Input
                type={el.type}
                value={formState?.[el.stateField]?.value}
                onChange={(e) => onChangeHandler(el?.stateField, e.target.value)}
                placeholder={el.placeholder}
              />
              {formState?.[el?.stateField]?.error && (
                <Notification type="error" label={formState?.[el?.stateField].error} />
              )}
            </InputContainer>
          ))}

          <Button type="submit" variant="primary">{buttonLabel}</Button>
          {success && (
            <Notification type="success" label={successMessage} />
          )}
        </Form>
      </Container>
    </>
  );
}

export default TaskForm;