import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Input from '../index';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';

describe('Input', () => {
  test('renders Input and handles change', () => {
    const handleInputChange = jest.fn();

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input 
          value=""
          type="text"
          onChange={handleInputChange}
          placeholder="Test Input"
        />
      </ThemeProvider>
    );

    fireEvent.change(getByPlaceholderText('Test Input'), { target: { value: 'New Value' } });
    expect(handleInputChange).toHaveBeenCalled();
  });
});