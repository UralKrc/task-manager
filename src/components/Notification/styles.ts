import styled from "styled-components";

export const StyledNotification = styled.p.withConfig({
  shouldForwardProp: (prop) => !['type'].includes(prop),
})<{
  type?: 'success' | 'error';
}>`
  color: ${({ theme, type }) => type === 'error' ? theme.error.color : theme.success.color};
  border: ${({ theme, type }) => type === 'error' ? theme.error.border : theme.success.border};
  border-radius: ${({ theme, type }) => type === 'error' ? theme.error.borderRadius : theme.success.borderRadius};
  padding: ${({ theme, type }) => type === 'error' ? theme.error.padding : theme.success.padding};
  margin: ${({ theme, type }) => type === 'error' ? theme.error.margin : theme.success.margin};
  font-size: ${({ theme, type }) => type === 'error' ? theme.error.fontSize : theme.success.fontSize};
  background-color: ${({ theme, type }) => type === 'error' ? theme.error.backgroundColor : theme.success.backgroundColor};
`;