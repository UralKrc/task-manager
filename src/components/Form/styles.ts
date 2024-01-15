import styled from 'styled-components';

export const Container = styled.div`
  border: ${({ theme }) => theme.borders.default};
  border-radius: ${({ theme }) => theme.borders.radius};
  padding: 1rem;
  margin: 3rem auto;
  font-family: sans-serif;
  max-width: 720px;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 0.825rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`; 

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.success.color};
  border: ${({ theme }) => theme.success.border};
  border-radius: ${({ theme }) => theme.success.borderRadius};
  padding: ${({ theme }) => theme.success.padding};
  margin: ${({ theme }) => theme.success.margin};
  font-size: ${({ theme }) => theme.error.fontSize};
  background-color: ${({ theme }) => theme.success.backgroundColor};
`;