import React from 'react';
import {Text, View} from 'react-native';
import {dpFont} from '../../../utilities/SizeInDp';
import Component1 from './Component1';
import Component2 from './Component2';

const HOCExample = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: dpFont(15)}}>
        A Higher-Order Component (HOC) in React Native (and React) is a function
        that takes a component as input and returns a new component with added
        functionality or props. HOCs are used for code reuse and adding
        behaviors or features to multiple components without repeating the same
        logic.
      </Text>
      <Component1 />
      <Component2 />
    </View>
  );
};

export default HOCExample;
