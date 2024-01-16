import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  gap: 0.5em;

  @media (min-width: 768px) {
    transform: translateX(200%);
    opacity: 0;
  }
`;

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  padding: 2rem 1rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: ${({ theme }) => theme.borders.default};


  @media (min-width: 768px) {
    &:hover ${ButtonWrapper} {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const TaskInfo = styled.div``;

export const Name = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.125rem;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.text};

  b {
    font-weight: bold;
  }
`;