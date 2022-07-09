import styled, { keyframes } from "styled-components";

export const Heart: React.FC = () => {
  return (
    <Wrapper
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="40"
      height="40"
      viewBox="0 0 544.582 544.582"
    >
      <g>
        <path
          d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
		C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
		c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"
        />
      </g>
    </Wrapper>
  );
};

const animation = keyframes`
	0% { trasnform: scale(1)},
	20% { transform: scale(1.5)}
	40%{ transform: scale(2)}
`;

const Wrapper = styled.svg`
  position: absolute;
  fill: rgba(255, 255, 255, 0.9);
  animation: ${animation} 0.3s ease-in-out;
`;
