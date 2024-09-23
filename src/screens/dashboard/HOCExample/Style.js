import {StyleSheet} from 'react-native';
import {dpWidth} from '../../../utilities/SizeInDp';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  componentBox: {
    marginVertical: dpWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  comBtn: {paddingHorizontal: 20, marginVertical: 20},
  buttonBox: {
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: dpWidth(20),
  },
  btnText: {
    color: 'white',
  },
});
