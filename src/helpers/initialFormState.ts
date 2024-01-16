import { FormState } from "../components/Form/types";
import { formConfiguration } from "./formConfiguration";

export const initialFormState: FormState = formConfiguration.reduce((acc, el) => {
  acc[el.stateField] = {
    value: el.stateDefault,
    error: null,
  };
  return acc;
}, {} as FormState);