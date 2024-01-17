import { formConfiguration } from "../components/TaskForm/constants";
import { FormState } from "../components/TaskForm/types";

export const initialFormState: FormState = formConfiguration.reduce((acc, el) => {
  acc[el.stateField] = {
    value: el.stateDefault,
    error: null,
  };
  return acc;
}, {} as FormState);