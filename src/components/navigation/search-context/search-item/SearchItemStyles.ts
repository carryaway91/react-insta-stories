import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0.3rem 0.7rem;
  .flex {
    margin-left: 0.5rem;
  }

  &:hover {
    background: #eaeaea;
    cursor: pointer;
  }

  p {
    color: gray;
  }
`;

export const Close = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 1.4rem;
  color: #a0a0a0;
  position: absolute;
  right: 1rem;
  top: 14px;
`;
