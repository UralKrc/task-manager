import { ButtonHTMLAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  theme: DefaultTheme;
}

const getButtonStyles = (props: ButtonProps) => {
  const { theme, variant = 'primary' } = props;
  return `
    background-color: ${theme.buttons[variant].backgroundColor};
    padding: ${theme.buttons.padding};
    color: ${theme.colors.white};
    font-size: 1.125rem;
    border: ${theme.borders.default};
    border-radius: ${theme.borders.radius};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.buttons[variant].hoverBackgroundColor};
    }
  `;
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{
  variant?: 'primary' | 'secondary';
}>`
  ${(props) => getButtonStyles(props)}
`;
