import styled from "styled-components";

export const Magnifier: React.FC = () => {
  return (
    <SVG
      aria-label="Search"
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
        fill="none"
        stroke="currentColor"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </SVG>
  );
};

const SVG = styled.svg`
  position: relative;
  top: 2px;
  margin-right: 0.5rem;
`;
