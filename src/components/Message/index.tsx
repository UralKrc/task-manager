import { Label } from "./styles";

const Message = ({ 
  label, 
  type,
}: { 
  label: string;
  type: string;
}) => {
  return  (
    <Label type={type}>{label}</Label>
  )
}

export default Message;