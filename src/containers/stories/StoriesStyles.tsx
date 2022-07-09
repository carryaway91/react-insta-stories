import styled from "styled-components";

export const StoryContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  justify-content: center;
  display: flex;
  transition: all 0.45s ease-in-out;

  .previous {
    left: -2rem;
  }

  .next {
    right: -2rem;
  }
`;
