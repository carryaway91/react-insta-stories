import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
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
  .posts {
    transition: all 0.2s ease-in-out;
  }
  .slideDown {
    transform: translateY(3.8rem);
    transition: all 0.2s ease-in-out;
  }
`;
