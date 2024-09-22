import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from './dimentions';
import Fonts from './fonts';

const Typography = StyleSheet.create({
  // Small Fonts
  Medium12: {
    fontFamily: Fonts.Medium,
    fontSize: wp(2.8),
    lineHeight: 21,
  },
  Regular12: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Regular13: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Italic13: {
    fontFamily: Fonts.Italic,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Bold13: {
    fontFamily: Fonts.Bold,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Bold14: {
    fontFamily: Fonts.Bold,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  Regular14: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  Semibold13: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(3),
    lineHeight: 20,
  },
  Medium16: {
    fontFamily: Fonts.Medium,
    fontSize: wp(4),
    lineHeight: 24,
  },
  Regular18: {
    fontFamily: Fonts.Regular,
    fontSize: wp(4),
    lineHeight: 21,
  },

  // Medium Fonts
  Semibold24: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(6.1),
    lineHeight: 36,
  },
  Semibold20: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(7.6),
    lineHeight: 45,
  },
  Semibold28: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(7),
    lineHeight: 42,
  },
  Semibold32: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(8),
    lineHeight: 48,
  },
});

export default Typography;
