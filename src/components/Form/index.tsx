import { useEffect, useState } from 'react';
import { formConfiguration } from '../../helpers/formConfiguration';
import Button from '../Button';
import { Container, InputContainer, Label, StyledForm, Subtitle, SuccessMessage } from './styles';
import Input from '../Input';
import Message from '../Message';
import { initialFormState } from '../../helpers/initialFormState';
import { FormState } from './types';

const Form = (
  { 
    onSubmit, 
    isEditMode = false,
  } : 
  { 
    onSubmit: (item: number) => void;  
    isEditMode?: boolean;
  }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [success, setSuccess] = useState(false);

  const subtitle = 
    isEditMode ? 
      'Please edit the task name or description.' 
      : 
      'Please enter the task name and description to create a new task.';

  const label = 
    isEditMode ? 
      'Edit task' 
      : 
      'Add task';
  
  const successMessage = 
    isEditMode ? 
      'Task edited successfully!' 
      : 
      'Task added successfully!' 

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

    onSubmit;
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
    <Container isEditMode={isEditMode}>
      <Subtitle>
        {subtitle}
      </Subtitle>
      <StyledForm onSubmit={handleSubmit}>
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
              <Message type="error" label={formState?.[el?.stateField].error} />
            )}
          </InputContainer>
        ))}

        <Button type="submit" variant="primary" label={label} />
        {success && (
          <Message type="success" label={successMessage} />
        )}
      </StyledForm>
    </Container>
  );
}

export default Form;