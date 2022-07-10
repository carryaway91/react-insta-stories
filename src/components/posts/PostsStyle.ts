import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 466px;
  border: 1px solid #e2e2e2;
  background: white;
  border-radius: 0.8rem;
  position: relative;
  overflow-x: hidden;
  margin: 1rem 0;
`;

export const Nickname = styled.h4`
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

interface IProps {
  red: boolean;
}

const popup = keyframes`
    0% {
        transform: scale(1)
    }

    70% {
        transform: scale(1.3)
    }

    100 {
        transform: scale(1.2)
    }
  `;
export const Icon = styled.img<IProps>`
  width: 24px;
  cursor: pointer;
  animation: ${(props) =>
    props.red
      ? css`
          ${popup} .3s linear
        `
      : ""};
`;
