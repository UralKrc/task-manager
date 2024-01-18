import { useCallback, useState } from "react";
import { supabase } from "../helpers/supabaseClient";
import { useTasks } from "./useTasks";
import { TaskItemType } from "../views/TaskManager/types";

export function useSupabase(table: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { setTasks } = useTasks();

  const getData = useCallback(async (): Promise<TaskItemType[] | undefined> => {
    setLoading(true);

    try {
      const { data, error } = await supabase.from(table).select();

      if (error) throw error;
      if (data) setTasks(data);

      return data || [];
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setLoading(false);
    }
  }, [table, setTasks]);

  const addData = useCallback(
    async (item: Omit<TaskItemType, 'id'>) => {
      setLoading(true);

      try {
        const { error } = await supabase.from(table).insert(item);

        if (error) throw error;

        await getData();
      } catch (error) {
        setError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setLoading(false);
      }
    },
    [table, getData]
  );

  const editData = useCallback(
    async (id: number, item: TaskItemType) => {
      setLoading(true);

      try {
        const { error } = await supabase.from(table).update(item).eq("id", id);

        if (error) throw error;

        await getData();
      } catch (error) {
        setError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setLoading(false);
      }
    },
    [table, getData]
  );

  const deleteData = useCallback(
    async (id: number) => {
      setLoading(true);
      
      try {
        const { error } = await supabase.from(table).delete().eq("id", id);

        if (error) throw error;

        await getData();
      } catch (error) {
        setError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setLoading(false);
      }
    },
    [table, getData]
  );

  return { addData, editData, deleteData, getData, loading, error };
}
