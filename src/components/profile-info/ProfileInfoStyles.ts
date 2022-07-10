import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin-right: 2rem;
  }

  div {
    margin: 0.7rem;
  }

  .info {
    margin-left: 3rem;
    align-self: center;

    p {
      margin-right: 2rem;
      font-size: 1rem;

      strong {
        font-weight: 600;
      }
    }
  }
`;
export const EditButton = styled.button`
  align-self: end;
  background: transparent;
  border: 1px solid lightgray;
  padding: 0.5rem;
  font-weight: 600;
  border-radius: 0.2rem;
`;
