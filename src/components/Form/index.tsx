import { useEffect, useState } from 'react';
import { formConfiguration } from '../../helpers/formConfiguration';
import Button from '../Button';
import { Container, InputContainer, Label, StyledForm, Subtitle, SuccessMessage } from './styles';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import { FormState } from '../../constants/types';
import { initialFormState } from '../../helpers/initialFormState';

const Form = ({ addTask }: { addTask: (item: number) => void; }) => {
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
    setFormState({});
    addTask;
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
              <ErrorMessage label={formState?.[el?.stateField].error} />
            )}
          </InputContainer>
        ))}

        <Button type="submit" variant="primary" label="Add task" />
        {success && (
          <SuccessMessage className="success">Task added successfully!</SuccessMessage>
        )}
      </StyledForm>
    </Container>
  );
}

export default Form;