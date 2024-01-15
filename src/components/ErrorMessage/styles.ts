import styled from "styled-components";

export const ErrorLabel = styled.p`
  color: ${({ theme }) => theme.error.color};
  border: ${({ theme }) => theme.error.border};
  border-radius: ${({ theme }) => theme.error.borderRadius};
  padding: ${({ theme }) => theme.error.padding};
  margin: ${({ theme }) => theme.error.margin};
  font-size: ${({ theme }) => theme.error.fontSize};
  background-color: ${({ theme }) => theme.error.backgroundColor};
`;