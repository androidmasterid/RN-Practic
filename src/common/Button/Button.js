import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../constants/AppColors';
import {dpHeight} from '../../utilities/SizeInDp';

const Button = ({buttonTestId, label, style, txtStyle, icon, ...rest}) => {
  return (
    <TouchableOpacity
      testID={buttonTestId}
      activeOpacity={0.6}
      style={[styles.btn, style]}
      {...rest}>
      {icon}
      <Text style={[styles.btnText, txtStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61d06e',
    borderRadius: dpHeight(5),
    fontWeight: '300',
    width: '100%',
    paddingVertical: dpHeight(10),
  },
  btnText: {
    color: AppColors.white,
    fontSize: 12,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
export default Button;

Button.propTypes = {
  buttonTestId: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.any,
  txtStyle: PropTypes.any,
  icon: PropTypes.any,
};
