export type FormField = {
  type: string;
  label: string;
  stateField: string;
  stateDefault: string;
  placeholder: string;
};

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
