import { formConfiguration } from "./formConfiguration";
import { FormState } from "../constants/types";

export const initialFormState: FormState = formConfiguration.reduce((acc, el) => {
  acc[el.stateField] = {
    value: el.stateDefault,
    error: null,
  };
  return acc;
}, {} as FormState);