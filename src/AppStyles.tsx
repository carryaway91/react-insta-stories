import styled from "styled-components";

export const Wrapper = styled.div<{ scroll: boolean }>`
  min-height: ${(props) => (props.scroll ? "100vh" : "100vh")};
  height: ${(props) => (props.scroll ? "100vh" : "")};
  background: #fafafa;
  overflow-y: hidden;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 800px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const StoriesContainer = styled.div`
  position: absolute;
  top: 0px;
  height: 100vh;
  background: black;
  z-index: 1111111;
  overflow: hidden;
`;
