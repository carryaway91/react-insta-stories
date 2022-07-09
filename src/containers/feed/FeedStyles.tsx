import styled from "styled-components";

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .suggestions {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
