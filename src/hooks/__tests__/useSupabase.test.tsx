import { renderHook, act } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { useSupabase } from '../useSupabase';
import { supabase } from '../../helpers/supabaseClient';
import { TaskProvider } from '../../contexts/TaskContext';
import { ReactNode } from 'react';

const mockQueryBuilder = {
  select: jest.fn().mockResolvedValue({ data: [], error: null }),
  insert: jest.fn().mockResolvedValue({ error: null }),
  update: jest.fn().mockResolvedValue({ error: null }),
  delete: jest.fn().mockResolvedValue({ error: null }),
};

jest.mock('../../helpers/supabaseClient', () => ({
  supabase: {
    from: jest.fn(() => mockQueryBuilder),
  },
}));

describe('useSupabase', () => {
  it('should get data', async () => {
    const wrapper = ({ children }: { children?: ReactNode }) => <TaskProvider>{children}</TaskProvider>;
    const { result } = renderHook(() => useSupabase('table'), { wrapper });
  
    act(() => {
      result.current.getData();
    });
  
    await waitFor(() => expect(supabase.from).toHaveBeenCalledWith('table'));
    expect(mockQueryBuilder.select).toHaveBeenCalled();
  })

  it('should add data', async () => {
    const wrapper = ({ children }: { children?: ReactNode }) => <TaskProvider>{children}</TaskProvider>;
    const { result } = renderHook(() => useSupabase('table'), { wrapper });
    const newItem = { name: 'New item', description: 'New description' };
  
    act(() => {
      result.current.addData(newItem);
    });
  
    await waitFor(() => expect(supabase.from).toHaveBeenCalledWith('table'));
    expect(mockQueryBuilder.insert).toHaveBeenCalledWith(newItem);
  });
  
  it('should edit data', async () => {
    const wrapper = ({ children }: { children?: ReactNode }) => <TaskProvider>{children}</TaskProvider>;
    const { result } = renderHook(() => useSupabase('table'), { wrapper });
    const updatedItem = { id: 1, name: 'Updated item', description: 'Updated description' };
  
    act(() => {
      result.current.editData(updatedItem.id, updatedItem);
    });
  
    await waitFor(() => expect(supabase.from).toHaveBeenCalledWith('table'));
    expect(mockQueryBuilder.update).toHaveBeenCalledWith(updatedItem);
  });

  it('should delete data', async () => {
    const wrapper = ({ children }: { children?: ReactNode }) => <TaskProvider>{children}</TaskProvider>;
    const { result } = renderHook(() => useSupabase('table'), { wrapper });
    const idToDelete = 1;
  
    await act(async () => {
      await result.current.deleteData(idToDelete);
    });
  
    await waitFor(() => expect(supabase.from).toHaveBeenCalledWith('table'));
    await waitFor(() => expect(mockQueryBuilder.delete).toHaveBeenCalled());
  });
});