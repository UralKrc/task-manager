import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notification from '../index';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/themes/default';

describe('Notification', () => {
  test('renders Notification with label and type', () => {
    render(
      <ThemeProvider theme={theme}>
        <Notification label="Test Notification" type="success" />
      </ThemeProvider>
    );

    const notificationElement = screen.getByText('Test Notification');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveStyle('color: #2ecc71');
  });

  test('renders Notification with error type', () => {
    render(
      <ThemeProvider theme={theme}>
        <Notification label="Test Error Notification" type="error" />
      </ThemeProvider>
    );

    const notificationElement = screen.getByText('Test Error Notification');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveStyle('color: #e74c3c');
  });
});