import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
export const PlayAutioSVG = (props) => (
  <Svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      className="clr-i-solid clr-i-solid-path-1"
      d="M32.16,16.08,8.94,4.47A2.07,2.07,0,0,0,6,6.32V29.53a2.06,2.06,0,0,0,3,1.85L32.16,19.77a2.07,2.07,0,0,0,0-3.7Z"
    />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);

export const ArrowUpSVG = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M7.5 3L15 11H0L7.5 3Z" fill="#000000" />
  </Svg>
);
export const ArrowDownSVG = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M7.49988 12L-0.00012207 4L14.9999 4L7.49988 12Z" fill="#000000" />
  </Svg>
);
