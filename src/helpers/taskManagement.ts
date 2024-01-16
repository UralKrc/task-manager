export const addTask = <T>(data: T[] | null, task: T): T[] => {
  return data ? [...data, task] : [task];
};

export const deleteTask = <T>(data: T[] | null, id: number): T[] | null => {
  return data ? data.filter((item) => item.id !== id) : null;
};

export const editTask = <T>(data: T[] | null, id: number, updatedTask: T): T[] | null => {
  return data ? data.map((item) => (item.id === id ? updatedTask : item)) : null;
};
