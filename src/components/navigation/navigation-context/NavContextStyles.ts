import styled, { keyframes } from "styled-components";

export const alarm = keyframes`
    0% {
        transform: 1
    }
    50% {
        transform: translateX(1rem)
    }
    100% {
        transform: translateX(0rem)
    }
`;

export const Wrapper = styled.div`
  padding: 0.5rem;
  opacity: 1;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 0 5px 0 gray;
  position: absolute;
  top: 2.3rem;
  left: -100%;
  text-align: center;
  white-space: nowrap;
  animation: ${alarm} 0.2s 0.5s ease-in-out 3;
`;
