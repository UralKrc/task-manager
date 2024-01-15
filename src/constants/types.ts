export type TaskItem = {
  id: number,
  name: string,
  description: string,
}

export type FormState = {
  [key: string]: {
    value: string;
    error: string | null;
  };
};