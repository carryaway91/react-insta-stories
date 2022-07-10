import styled from "styled-components";

export const Wrapper = styled.div<{ onClick: () => void }>`
  position: absolute;
  right: 11rem;
  top: 0rem;
  background: white;
  border: 1px solid lightgray;
  padding: 0.5rem;
  border-radius: 1rem;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0 0 5px 0 grey;
  font-weight: 500;
`;
