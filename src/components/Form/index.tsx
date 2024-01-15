import React, { useEffect, useState } from 'react';
import { formConfiguration } from '../../helpers/formConfiguration';
import Button from '../Button';
import { Container, InputContainer, Label, StyledForm, Subtitle } from './styles';
import Input from '../Input';

const Form = () => {
  const [formState, setFormState] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    constructFormState();
  }, []);

  console.log(formState);
  const constructFormState = () => {
    let preparedObj = {};
    formConfiguration.forEach((el) => {
      preparedObj[el.stateField] = {
        value: el.stateDefault,
        error: null,
      };
    });

    setFormState(preparedObj);
  };

  const onChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: {
        value: value,
        error: null,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = handleFormValidations();

    if (hasErrors) {
      setSuccess(false);
      return;
    }
    setSuccess(true);
  };

  const handleFormValidations = () => {
    const updatedState = { ...formState };
    let error = false;

    const { name, description } =
      updatedState;
    if (name.value?.length < 3) {
      updatedState.name.error =
        'Name cannot be less than 3 characters';
      error = true;
    }
    if (description.value?.length < 3) {
      updatedState.description.error =
        'Description cannot be less than 3 characters';
      error = true;
    }

    setFormState({
      ...formState,
      ...updatedState,
    });

    return error;
  };

  return (
    <Container>
      <Subtitle>
        Please enter the task name and description to create a new task.
      </Subtitle>
      <StyledForm onSubmit={handleSubmit}>
        {formConfiguration.map((el, idx) => (
          <InputContainer key={`form-element-${idx}`}>
            <Label className="label">{el.label}:</Label>
            <Input
              type={el.type}
              value={formState?.[el.stateField]?.value}
              onChange={(e) => onChangeHandler(el?.stateField, e.target.value)}
              placeholder={el.placeholder}
            />
            {formState?.[el?.stateField]?.error && (
              <p className="error">{formState?.[el?.stateField].error}</p>
            )}
          </InputContainer>
        ))}

        <Button type="submit" variant="primary" label="Add task" />
        {success && (
          <p className="success">Task added successfully!</p>
        )}
      </StyledForm>
    </Container>
  );
}

export default Form;