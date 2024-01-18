import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskManager from '../index';
import { useSupabase } from '../../../hooks/useSupabase';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import { TaskProvider } from '../../../contexts/TaskContext';

jest.mock('../../../hooks/useSupabase');

describe('TaskManager', () => {
  beforeEach(() => {
    (useSupabase as jest.Mock).mockReturnValue({
      getData: jest.fn(),
      loading: false,
      error: null,
    });
  });

  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskManager />
        </TaskProvider>
      </ThemeProvider>
    );
    expect(screen.getByText('Welcome to Task Manager')).toBeInTheDocument();
  });
  
  it('shows loading state', () => {
    (useSupabase as jest.Mock).mockReturnValue({
      getData: jest.fn(),
      loading: true,
      error: null,
    });
  
    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskManager />
        </TaskProvider>
      </ThemeProvider>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows error state', () => {
    (useSupabase as jest.Mock).mockReturnValue({
      getData: jest.fn(),
      loading: false,
      error: 'Unexpected error. Please reload the page.',
    });

    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskManager />
        </TaskProvider>
      </ThemeProvider>
    );
    expect(screen.getByText('Unexpected error. Please reload the page.')).toBeInTheDocument();
  });
});