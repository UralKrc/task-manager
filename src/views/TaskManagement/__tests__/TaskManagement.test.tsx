import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskManager from '..';
import useFetch from '../../../hooks/useFetch';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import TaskContext from '../../../contexts/TaskContext';

jest.mock('../../../hooks/useFetch');

test('renders TaskManager with fetched data', async () => {
  (useFetch as jest.Mock).mockReturnValue({
    data: [{ id: '1', name: 'Welcome to Task Manager', description: 'Test Description' }],
    loading: false,
    error: null,
  });

  const mockTasks = {
    tasks: [],
    addTask: jest.fn(),
    deleteTask: jest.fn(),
    editTask: jest.fn(),
  };

  render(
    <ThemeProvider theme={theme}>
      <TaskContext.Provider value={mockTasks}>
        <TaskManager />
      </TaskContext.Provider>
    </ThemeProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('Welcome to Task Manager')).toBeInTheDocument();
  });
});