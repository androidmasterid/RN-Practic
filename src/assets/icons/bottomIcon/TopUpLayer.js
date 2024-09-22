import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const TopUpLayer = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 143 12"
    width={143}
    height={12}
    fill="none"
    {...props}>
    <Path
      fill="#224083"
      d="M0 11.988c16.365-.081 25.96.206 37.607-3.612C49.755 5.114 52.93.476 68.714.024 84.5-.428 92.393 5.667 100.75 8.376c7.393 2.397 14.171 3.488 33.862 3.612H143c-3.035.016-5.821.016-8.388 0H0Z"
    />
  </Svg>
);
export default TopUpLayer;
