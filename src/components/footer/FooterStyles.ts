import styled from "styled-components";

export const Li = styled.li`
  &:last-child span {
    display: none;
  }
`;

export const Link = styled.a`
  color: #d0d0d0;
  text-decoration: none;
  font-size: 0.8rem;
`;

export const Dot = styled.span`
  color: #d0d0d0;
  position: relative;
  bottom: 3px;
  left: 2px;
  margin: 0 1px;
`;

export const Copy = styled.p`
  color: #d0d0d0;
  margin-top: 1rem;
`;
