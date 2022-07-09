import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
  padding-bottom: 0.3rem;
`;

export const Input = styled.span`
  border: none;
  margin-left: 0.5rem;
  display: block;
  width: 367px;
  overflow: hidden;
  line-height: 20px;
  outline: none;
  max-height: 60px;
`;

interface IProps {
  active: boolean;
}
export const Submit = styled.button<IProps>`
  border: none;
  color: ${(props) => (props.active ? "#0095f6" : "rgba(0, 149, 246, .4)")};
  background: none;
  font-weight: bold;
  cursor: pointer;
`;
