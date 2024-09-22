// import {useNetInfo} from '@react-native-community/netinfo';
// import React from 'react';
// import {StyleSheet, Text} from 'react-native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// export const CheckInternet = () => {
//   const internet = useNetInfo() ?? true;
//   const isNet = internet.isConnected ?? true;
//   return !isNet ? (
//     <SafeAreaProvider style={styles.container}>
//       <SafeAreaView>
//         <Text style={styles.alertHeading}>No Internet connection</Text>
//         <Text style={[styles.alertHeading, styles.subHeading]}>
//           You are not connected to the internet
//         </Text>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   ) : null;
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     position: 'absolute',
//     top: 0,
//     paddingTop: 15,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//   },
//   alertHeading: {
//     justifyContent: 'center',
//     color: '#ffffff',
//     fontSize: 14,
//     marginHorizontal: 10,
//   },
//   subHeading: {
//     paddingVertical: 3,
//     paddingBottom: 10,
//     fontSize: 15,
//   },
// });
