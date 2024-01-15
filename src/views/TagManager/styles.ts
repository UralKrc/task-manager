import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: fantasy;
  font-size: 2rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  text-align: center;
  margin: 1rem 0;
  font-weight: bold;
`;

export const ErrorContainer = styled.div`
  padding: 1em;
`;