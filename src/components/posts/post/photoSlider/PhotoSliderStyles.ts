import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
interface IProps {
  left: string;
}

export const PhotoList = styled.ul<IProps>`
  width: 10000rem;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  transition: all 0.3s ease-in-out;
  left: ${(props) => props.left};
  cursor: pointer;
`;

export const ImgWrapper = styled.li`
  width: 466px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: black;
  position: relative;
`;

export const Img = styled.img`
  max-width: 466px;
`;
