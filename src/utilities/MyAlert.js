import {Alert} from 'react-native';

export const errorMessage = error =>
  error?.response?.data?.message ??
  error.response?.data?.error ??
  'something_went_wrong';

export const myAlert = (title, message, eventHandlers) => {
  if (!message) {
    Alert.alert('', title);
  } else {
    Alert.alert(title, message, eventHandlers);
  }
};
