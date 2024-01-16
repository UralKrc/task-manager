import styled from 'styled-components';

export const StyledInput = styled.input`
  border: ${({ theme }) => theme.input.border};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  padding: ${({ theme }) => theme.input.padding};
  margin: ${({ theme }) => theme.input.margin};
  height: ${({ theme }) => theme.input.height};
  outline: none;

  &:focus {
    border: ${({ theme }) => theme.input.focusBorder};
    box-shadow: ${({ theme }) => theme.input.focusBoxShadow};
  }
`;

