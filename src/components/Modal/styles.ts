import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  backdrop-filter: blur(1px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal {
    min-height: 30%;
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #000;
    padding: 1em;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButttonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButton = styled.a`
  cursor: pointer;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
`;