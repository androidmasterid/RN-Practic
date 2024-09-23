import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../common/Button/Button';
import HOCCalculation from '../../../common/HOCCalculation';
import {styles} from './Style';

const Component2 = ({money, handelClick}) => {
  return (
    <View style={styles.componentBox}>
      <Text>Component 2</Text>
      <Text>Other Salary increased by {money} </Text>
      <Button
        onPress={handelClick}
        style={styles.comBtn}
        label={'Increased By 2x'}
      />
    </View>
  );
};

export default HOCCalculation(Component2);
