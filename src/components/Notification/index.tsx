import { Label } from "./styles";

const Message = ({ 
  label, 
  type,
}: { 
  label: string | null;
  type: 'success' | 'error';
}) => {
  return  (
    <Label type={type}>{label}</Label>
  )
}

export default Message;