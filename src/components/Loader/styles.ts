import styled from 'styled-components';

export const Spinner = styled.div`
  @keyframes loading-circle-animation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: loading-circle-animation 0.7s linear infinite;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 50%;
  display: inline-block;
  height: 28px;
  width: 28px;
`;

export const StyledLoader = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  ${Spinner} {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;
