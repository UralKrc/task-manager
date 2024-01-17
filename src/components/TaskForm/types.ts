export type FormState = {
  [key: string]: {
    value: string;
    error: string | null;
  };
};

export type FormField = {
  type: string;
  label: string;
  stateField: string;
  stateDefault: string;
  placeholder: string;
};
