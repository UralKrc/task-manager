import styled from "styled-components";

export const Tasks = styled.div`
  font-family: sans-serif;
`;

export const EmptyState = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyStateText = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: ${({ theme }) => theme.borders.default};
  border-radius: ${({ theme }) => theme.borders.radius};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;


export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;