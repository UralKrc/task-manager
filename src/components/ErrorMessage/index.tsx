import { ErrorLabel } from "./styles";

const ErrorMessage = ({ label }: { label: string}) => {
  return  (
    <ErrorLabel>{label}</ErrorLabel>
  )
}

export default ErrorMessage;