import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '..';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';
import { TaskProvider } from '../../../contexts/TaskContext';

describe('Modal', () => {
  test('renders correctly in edit mode', () => {
    const handleClose = jest.fn();
    const handleSecondaryButtonClick = jest.fn();

    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <Modal 
            handleClose={handleClose} 
            taskId={1}
            handleSecondaryButtonClick={handleSecondaryButtonClick}
            isEditMode={true} 
            secondaryActionTitle="Delete Task"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    expect(getByText('Edit Task')).toBeInTheDocument();
    expect(getByText('Please edit the task name or description.')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Edit task' })).toBeInTheDocument();
  });

  test('renders correctly in non-edit mode', () => {
    const handleClose = jest.fn();
    const handleSecondaryButtonClick = jest.fn();

    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <Modal 
            handleClose={handleClose} 
            taskId={1}
            handleSecondaryButtonClick={handleSecondaryButtonClick}
            isEditMode={false} 
            secondaryActionTitle="Delete Task"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    expect(getByText('Delete Task')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });

  test('calls handleClose when close icon is clicked', () => {
    const handleClose = jest.fn();
    const handleSecondaryButtonClick = jest.fn();

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <Modal 
            handleClose={handleClose} 
            taskId={1}
            handleSecondaryButtonClick={handleSecondaryButtonClick}
            isEditMode={false} 
            secondaryActionTitle="Delete Task"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    fireEvent.click(getByRole('img'));
    expect(handleClose).toHaveBeenCalled();
  });

  test('calls handleSecondaryButtonClick when secondary action button is clicked', () => {
    const handleClose = jest.fn();
    const handleSecondaryButtonClick = jest.fn();

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <Modal 
            handleClose={handleClose} 
            taskId={1}
            handleSecondaryButtonClick={handleSecondaryButtonClick}
            isEditMode={false} 
            secondaryActionTitle="Delete Task"
          />
        </TaskProvider>
      </ThemeProvider>
    );

    fireEvent.click(getByRole('button', { name: 'Delete' }));
    expect(handleSecondaryButtonClick).toHaveBeenCalled();
  });
});