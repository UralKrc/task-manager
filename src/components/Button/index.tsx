import React from 'react';
import { StyledButton } from './styles';

const Button = ({ 
  variant, 
  type,
  onClick, 
  children, 
}: {
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;