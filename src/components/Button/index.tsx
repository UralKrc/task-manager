import StyledButton from "./styles";

const Button = ({
  variant,
  onClick,
  label,
  type,
}: {
  variant: 'primary' | 'secondary',
  onClick?: () => void;
  label: React.ReactNode;
  type?: 'button' | 'submit',
}) => {
  return (
   <StyledButton 
      type={type} 
      $variant={variant} 
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
}

export default Button;