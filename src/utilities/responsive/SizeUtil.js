import {Dimensions, PixelRatio} from 'react-native';
import Exception from './Exception';
import {RESPONSIVE_TYPE} from './RESPONSIVE_TYPE';

// eslint-disable-next-line no-undef
export const appScreen = ({width, height} = Dimensions.get('window'));

export const getDefaultSize = () => {
  return {
    width: 360,
    height: 640,
  };
};

export const getResponsiveValue = (type, ratio = null) => {
  let screenValue;

  if (type === RESPONSIVE_TYPE.WIDTH) {
    screenValue = appScreen.width;
  } else if (type === RESPONSIVE_TYPE.HEIGHT) {
    screenValue = appScreen.height;
  } else if (type === RESPONSIVE_TYPE.FONT) {
    screenValue = appScreen.width;
  } else {
    throw new Exception(
      'Responsive Library ERROR',
      "getResponsiveValue() supports only 'WIDTH', 'HEIGHT', 'FONT'.",
    );
  }

  if (!ratio || typeof ratio !== 'number') {
    throw new Exception(
      'Responsive Library ERROR',
      'The `ratio` parameter of getResponsive() must be `number` type.',
    );
  }

  return PixelRatio.roundToNearestPixel((screenValue * ratio) / 100);
};
