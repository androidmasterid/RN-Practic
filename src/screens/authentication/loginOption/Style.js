import {StyleSheet} from 'react-native';
import {dpWidth} from '../../../utilities/SizeInDp';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnStyl: {
    width: '70%',
    marginVertical: dpWidth(10),
  },
});
