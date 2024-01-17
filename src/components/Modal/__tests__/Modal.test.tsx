import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../index';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';

describe('Modal', () => {
  test('renders Modal and handles close button click', () => {
    const handleClose = jest.fn();
    const handleSecondaryButtonClick = jest.fn();

    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Modal 
          handleClose={handleClose}
          taskId={1}
          handleSecondaryButtonClick={handleSecondaryButtonClick}
          isEditMode={false}
          secondaryActionTitle="Delete Task"
        />
      </ThemeProvider>
    );

    expect(getByText('Delete Task')).toBeInTheDocument();
    fireEvent.click(getByRole('img'));
    expect(handleClose).toHaveBeenCalled();
  });
});