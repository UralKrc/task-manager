import { renderHook, RenderHookOptions } from "@testing-library/react";
import { useTasks } from '../useTasks';
import TaskContext from '../../contexts/TaskContext';

describe('useTasks', () => {
  it('throws error when not used within a TaskProvider', () => {
    let error: Error | null = null;
    try {
      renderHook(() => useTasks());
    } catch (e) {
      error = e as Error;
    }

    // Throws error when not used within a TaskProvider
    expect(error).toBeDefined();
    expect(error?.message).toEqual('useTasks must be used within a TaskProvider');
  });

  it('does not throw error when used within a TaskProvider', () => {
    const wrapper: RenderHookOptions<unknown>['wrapper'] = ({ children }) => (
      <TaskContext.Provider value={{
        tasks: [],
        addTask: jest.fn(),
        deleteTask: jest.fn(),
        editTask: jest.fn(),
      }}>
        {children}
      </TaskContext.Provider>
    );
    const { result } = renderHook(() => useTasks(), { wrapper });

    expect(result.current).toBeDefined();
  });
});