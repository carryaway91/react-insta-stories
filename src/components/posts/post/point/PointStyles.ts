import styled from "styled-components";

interface IProps {
  active: boolean;
}
export const Wrapper = styled.div<IProps>`
  width: 6px;
  margin: 0 0.2rem;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#47afff" : "lightgray")};
  position: relative;
  left: -1rem;
  top: 7px;
`;
