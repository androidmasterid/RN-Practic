import {Linking} from 'react-native';
import {myAlert} from '../utilities/MyAlert';

export const openSetting = () => {
  Linking.openSettings().catch(() => {
    myAlert('Unable to open settings');
  });
};

export const permissionDialog = (title, desc) => {
  myAlert(title, desc, [
    {
      text: 'Cancel',
    },
    {text: 'Go to Settings', onPress: openSetting},
  ]);
};
