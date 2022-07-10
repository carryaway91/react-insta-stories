import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  #inner {
    display: flex;
    margin-left: 0.4rem;
    flex-direction: column;
    p {
      color: gray;
      font-size: 0.8rem;
    }
  }
`;

export const Follow = styled.p`
  font-size: 0.8rem;
  color: #0095f6;
  font-weight: bold;
  align-self: center;
  position: relative;
`;
