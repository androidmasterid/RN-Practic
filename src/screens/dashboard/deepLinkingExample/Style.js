import {StyleSheet} from 'react-native';
import {dpWidth} from '../../../utilities/SizeInDp';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonBox: {
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: dpWidth(20),
  },
  btnText: {
    color: 'white',
  },
});
