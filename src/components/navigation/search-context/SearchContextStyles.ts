import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 35vh;
  overflow-y: scroll;
  opacity: 0;
  background: white;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 0 gray;
  position: absolute;
  left: -4rem;
  top: 2.85rem;

  h3 {
    padding: 1rem;
    font-weight: 500;
  }
`;
