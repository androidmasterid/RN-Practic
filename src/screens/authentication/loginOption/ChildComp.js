import React from 'react';
import {Text, View} from 'react-native';
import {MyConsole} from '../../../utilities/MyConsole';

const ChildComp = ({fun}) => {
  MyConsole.log('ChildComp---->> ');

  return (
    <View
      style={{
        backgrounColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red'}}>Child Component</Text>
    </View>
  );
};

export default React.memo(ChildComp);
