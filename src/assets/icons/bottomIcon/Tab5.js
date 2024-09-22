import * as React from 'react';
import Svg, {Path, Defs, G} from 'react-native-svg';

const Tab5 = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G stroke={props.color ?? '#000'} filter="url(#a)">
      <Path
        strokeLinejoin="round"
        d="M5.818 14.818A4.5 4.5 0 0 0 4.5 18 2.5 2.5 0 0 0 7 20.5h12a2.5 2.5 0 0 0 2.5-2.5 4.5 4.5 0 0 0-4.5-4.5H9a4.5 4.5 0 0 0-3.182 1.318Z"
      />
      <Path d="M13 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    </G>
    <Defs></Defs>
  </Svg>
);

export default Tab5;
