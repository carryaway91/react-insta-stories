interface IProps {
  pos: string;
  click: () => void;
  show: boolean;
}
export const Arrow: React.FC<IProps> = ({ pos, click, show }) => {
  return (
    <svg
      onClick={() => click()}
      width="60"
      height="60"
      viewBox="0 0 1080 1080"
      style={{
        position: "absolute",
        transform: pos === "left" ? "rotate(180deg)" : "",
        top: "calc(50% - 30px)",
        right: pos === "right" ? 0 : "",
        cursor: "pointer",
        display: show ? "block" : "none",
      }}
    >
      <g
        transform="matrix(0 0 0 0 0 0)"
        id="7d4a1467-75a7-4702-ac7b-bc58462f2763"
      ></g>
      <g
        transform="matrix(1 0 0 1 540 540)"
        id="0d080e0a-0a10-4b9a-a845-43506f064a00"
      >
        <rect
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "transparent",
            fillRule: "nonzero",
            opacity: 1,
          }}
          x="-540"
          y="-540"
          rx="0"
          ry="0"
          width="1080"
          height="1080"
        />
      </g>
      <g
        transform="matrix(6.17 0 0 6.17 540 540)"
        id="c3d6c3f8-abb2-4aa5-aea7-6e8c96a44256"
      >
        <circle
          style={{
            stroke: "rgb(0,0,0)",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "rgb(220,220,220)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          cx="0"
          cy="0"
          r="35"
        />
      </g>
      <g
        transform="matrix(3.12 0 0 3.12 570.13 540)"
        id="d9f80e9d-86ba-41b1-ac6e-397f6f910139"
      >
        <polygon
          style={{
            stroke: "rgb(0,0,0)",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "rgb(255,255,255)",
            fillOpacity: 0.94,
            fillRule: "nonzero",
            opacity: 1,
          }}
          points="-30.68,-37.41 30.68,0 -30.68,37.41 "
        />
      </g>
    </svg>
  );
};
