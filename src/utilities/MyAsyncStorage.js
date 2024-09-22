// import * as Keychain from 'react-native-keychain';
// import {MyConsole} from './MyConsole';

// /* eslint-disable prettier/prettier */
// export const MyAsyncStorage = {
//   setItem: async (key, value) => {
//     try {
//       await Keychain.setInternetCredentials(key, value, value);
//     } catch (err) {
//       MyConsole.log('error while setItem ' + key, err);
//     }
//   },

//   getItem: async key => {
//     try {
//       const item = await Keychain.getInternetCredentials(key);
//       return item.username;
//     } catch (err) {
//       MyConsole.log('error while getItem ' + key, err);
//       return '';
//     }
//   },

//   removeItem: async key => {
//     try {
//       await Keychain.resetInternetCredentials(key);
//     } catch (err) {
//       MyConsole.log('error while removeItem ' + key, err);
//     }
//   },
// };
