import styled from "styled-components";

export const OuterWrap = styled.div`
  position: relative;
  width: 466px;
  overflow: hidden;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e2e2;
  margin-top: 1rem;
  padding-bottom: 1rem;
`;
export const Wrapper = styled.ul`
  position: absolute;
  display: flex;
  transition: all 0.5s ease-in-out;
  padding: 1.1rem 10px;
`;

export const WhiteSpacePanel = styled.div`
  width: 466px;
  height: 6.5rem;
  border-radius: 1rem;
`;

export const LeftBtn = styled.button`
  position: absolute;
  top: 2.7rem;
  left: 1rem;
`;

export const RightBtn = styled.button`
  position: absolute;
  top: 2.7rem;
  right: 1rem;
  cursor: pointer;
  z-index: 100000;
`;
