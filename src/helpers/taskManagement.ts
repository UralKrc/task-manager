export const addTask = <T>(data: T[] | null, task: T): T[] => {
  return data ? [...data, task] : [task];
};

export const deleteTask = <T>(data: T[] | null, index: number): T[] | null => {
  return data ? data.filter((_, i) => i !== index) : null;
};

export const editTask = <T>(data: T[] | null, index: number, updatedTask: T): T[] | null => {
  return data ? data.map((item, i) => (i === index ? updatedTask : item)) : null;
};
