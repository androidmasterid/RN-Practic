import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appScreen} from '../utilities/responsive/SizeUtil';

export const ListEmptyComponent = () => {
  return (
    <View style={styles.alignCenter}>
      <Text style={styles.Regular15}>No Data</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  alignCenter: {
    height: appScreen.height / 1.3,
    width: appScreen.width,
    flex: 1,
    top: 100,
    alignSelf: 'center',
    justifContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Regular15: {
    fontSize: 15,
  },
});
