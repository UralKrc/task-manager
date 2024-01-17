import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from '../index';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';

describe('Loader', () => {
  test('renders Loader', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});