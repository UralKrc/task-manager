import { StyledNotification } from "./styles";

const Notification = ({ 
  label, 
  type,
}: { 
  label: string | null;
  type: 'success' | 'error';
}) => {
  return  (
    <StyledNotification type={type}>{label}</StyledNotification>
  )
}

export default Notification;