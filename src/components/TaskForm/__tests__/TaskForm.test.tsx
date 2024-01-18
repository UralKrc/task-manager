import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '..';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import { useSupabase } from '../../../hooks/useSupabase';
import { TaskProvider } from '../../../contexts/TaskContext';
import { act } from 'react-dom/test-utils';

jest.mock('../../../hooks/useSupabase');

describe('TaskForm', () => {
  beforeEach(() => {
    (useSupabase as jest.Mock).mockReturnValue({
      addData: jest.fn(),
      editData: jest.fn(),
      error: null,
      // Add other properties returned by useSupabase if needed
    });
  });

  it('renders form', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskForm
            title="Test Form"
            subtitle="Test Subtitle"
            buttonLabel="Submit"
            successMessage="Success!"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Form')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('updates form fields on change', async () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskForm
            title="Test Form"
            subtitle="Test Subtitle"
            buttonLabel="Submit"
            successMessage="Success!"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Example Name'), { target: { value: 'Test Name' } });
      fireEvent.change(screen.getByPlaceholderText('Example Description'), { target: { value: 'Test Description' } });
    });

    expect(screen.getByPlaceholderText('Example Name')).toHaveValue('Test Name');
    expect(screen.getByPlaceholderText('Example Description')).toHaveValue('Test Description');
  });

  it('submits form on submit button click', async () => {
    const addDataMock = jest.fn();
    (useSupabase as jest.Mock).mockReturnValue({
      addData: addDataMock,
      editData: jest.fn(),
      error: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <TaskForm
            title="Test Form"
            subtitle="Test Subtitle"
            buttonLabel="Submit"
            successMessage="Success!"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Example Name'), { target: { value: 'Test Name' } });
      fireEvent.change(screen.getByPlaceholderText('Example Description'), { target: { value: 'Test Description' } });
      fireEvent.click(screen.getByText('Submit'));
    });

    expect(addDataMock).toHaveBeenCalledWith({
      name: 'Test Name',
      description: 'Test Description',
    });
  });
});