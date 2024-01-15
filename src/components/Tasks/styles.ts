import styled from "styled-components";

export const TaskList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


export const TaskItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;

  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.default};
  border-radius: ${({ theme }) => theme.borders.radius};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;


export const Name = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.125rem;
  font-weight: bold;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 1rem 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;