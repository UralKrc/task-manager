export const addTask = <T>(data: T[] | null, task: T): T[] => {
  return data ? [...data, task] : [task];
};

export const deleteTask = <T extends { id: number }>(data: T[] | null, id: number): T[] => {
  return data ? data.filter((item) => item.id !== id) : [];
};

export const editTask = <T extends { id: number }>(data: T[] | null, id: number, updatedTask: T): T[] => {
  return data ? data.map((item) => (item.id === id ? updatedTask : item)) : [];
};
