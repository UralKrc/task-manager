import { ButtonHTMLAttributes } from 'react';
import styled, { DefaultTheme, withTheme } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary';
  theme: DefaultTheme;
}

const getButtonStyles = (props: ButtonProps) => {
  const { theme, $variant = 'primary' } = props;
  return `
    background-color: ${theme.buttons[$variant].backgroundColor};
    padding: ${theme.buttons.padding};
    color: ${theme.colors.white};
    font-size: 1.125rem;
    border: ${theme.borders.default};
    border-radius: ${theme.borders.radius};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.buttons[$variant].hoverBackgroundColor};
    }
  `;
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => getButtonStyles(props)}
`;

export default withTheme(StyledButton);
