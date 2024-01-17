import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from '../index';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';

describe('Button', () => {
  test('renders Button and handles click', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button 
          variant="primary"
          type="button"
          onClick={handleClick}
        >
          Click Me
        </Button>
      </ThemeProvider>
    );

    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });
});