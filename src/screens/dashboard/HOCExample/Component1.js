import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../common/Button/Button';
import HOCCalculation from '../../../common/HOCCalculation';
import {styles} from './Style';

const Component1 = ({money, handelClick}) => {
  return (
    <View style={styles.componentBox}>
      <Text>Component 1</Text>
      <Text>Harsh Salary increased by {money}</Text>
      <Button
        onPress={handelClick}
        style={styles.comBtn}
        label={'Increased By X 2'}
      />
    </View>
  );
};

export default HOCCalculation(Component1);
