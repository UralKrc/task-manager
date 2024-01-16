import { ChangeEvent } from "react";
import { StyledInput } from "./styles"

const Input = ({
  value,
  type,
  onChange,
  placeholder
}: {
  value: string,
  type: string,
  onChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <StyledInput       
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
    />
  )
}

export default Input;