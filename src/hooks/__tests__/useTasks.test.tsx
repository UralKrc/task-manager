import { renderHook } from '@testing-library/react';
import { useTasks } from '../useTasks';

describe('useTasks', () => {
  it('throws error when not wrapped in TaskProvider', () => {
    let error;
    try {
      renderHook(() => useTasks());
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(Error('useTasks must be used within a TaskProvider'));
  });
});