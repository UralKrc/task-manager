import { FormField } from "./types";

export const formConfiguration: FormField[] = [
  {
    type: 'text',
    label: 'Task Name',
    stateField: 'name',
    stateDefault: '',
    placeholder: 'Example Name',
  },
  {
    type: 'text',
    label: 'Description',
    stateField: 'description',
    stateDefault: '',
    placeholder: 'Example Description',
  },
];