import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ButtonClose = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 12px;
  right: 32px;
  display: flex;
  align-items: center;
  color: yellow;
  border: none;
  border-radius: 50%;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  transition: color var(--transition-method);
  :hover,
  :focus {
    color: blue;
  }
`;
