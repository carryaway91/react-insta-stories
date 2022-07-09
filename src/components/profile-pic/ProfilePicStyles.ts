import styled from "styled-components";

interface Props {
  w: number;
  hasStory: boolean;
}
export const Wrapper = styled.div<Props>`
  position: relative;
  width: ${(props) => props.w + "px"};
  height: ${(props) => props.w + "px"};
  border-radius: 100%;
`;

export const Inner = styled.div<{ w: number }>`
  position: relative;
  width: ${(props) => props.w}px;
  height: ${(props) => props.w}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img<{ w: number }>`
  width: 86%;
  height: 86%;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
`;

export const StoryCircle = styled.div<{ w: number }>`
  position: relative;
  padding: ${(props) => props.w / 2}px;
  margin: 5px;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(45deg, yellow 10%, orangered 40%, hotpink 60%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;
