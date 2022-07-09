import styled, { keyframes } from "styled-components";

export const popup = keyframes`
    from {
        transform: scale(1.1)
    }
    to {
        transform: scale(1)
    }
`;
export const Wrapper = styled.div`
  width: 40vw;
  height: 80vh;
  background: white;
  border-radius: 0.5rem;
  z-index: 20000000;
  position: absolute;
  top: calc(50% - 40vh);
  left: calc(50% - 20vw);
  animation: ${popup} 0.15s ease-in-out;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const DragParagraph = styled.p`
  font-size: 2rem;
`;

export const Btn = styled.button`
  margin-top: 1rem;
  font-weight: bold;
  background: #0095fa;
  color: white;
  padding: 0.5rem 0.7rem;
  border: none;
  outline: none;
  border-radius: 0.2rem;
`;
