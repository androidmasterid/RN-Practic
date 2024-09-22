import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../common/Button/Button';
import {AppScreens} from '../../../constants/AppScreens';
import {styles} from './Style';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button
        onPress={() => navigation.navigate(AppScreens.LoginScreen)}
        label={'Login'}
        style={styles.btnStyl}
      />
    </View>
  );
};

export default SignUpScreen;
