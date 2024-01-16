import styled from 'styled-components';

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isEditMode'].includes(prop),
})<{
  isEditMode?: boolean;
}>`
  border: ${({ theme, isEditMode }) => isEditMode ? 'none' : theme.borders.default};
  border-radius: ${({ theme }) => theme.borders.radius};
  padding: 2rem 1rem;
  margin: 0 auto 3rem;
  font-family: sans-serif;
  box-shadow: ${({ isEditMode }) => !isEditMode && '0 0 10px rgba(0, 0, 0, 0.5)'};
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 3rem 0 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.form`
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