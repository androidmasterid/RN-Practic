import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../common/Button/Button';
import {AppScreens} from '../../../constants/AppScreens';
import {styles} from './Style';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        onPress={() => navigation.navigate(AppScreens.TabStack)}
        label={'TabStack'}
        style={styles.btnStyl}
      />
    </View>
  );
};

export default LoginScreen;
