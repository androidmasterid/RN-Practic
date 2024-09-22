import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../../../common/Button/Button';
import {AppScreens} from '../../../constants/AppScreens';
import {MyConsole} from '../../../utilities/MyConsole';
import {dpFont} from '../../../utilities/SizeInDp';
import ChildComp from './ChildComp';
import {styles} from './Style';

const LoginOption = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const [minus, setMinus] = useState(100);
  //   const useMemmmmo = useMemo(
  //     (multiply = () => {
  //       MyConsole.log('CALLLINGG----');
  //       return value * 10;
  //     }),
  //     [value],
  //   );

  //   const useMemmmmo = () => {
  //     MyConsole.log('This function is call when any button click and render components');
  //     return value * 10;
  //   };

  const useMemmmmo = useMemo(
    (multiply = () => {
      MyConsole.log('This function is call when click add button only');
      return value * 10;
    }),
    [value],
  );

  //   const fun = () => {
  //     /*
  //     If you use useCallback or useMemo and the function you’re memoizing
  //     is empty or does nothing, your child component might still re-render
  //     due to reference equality.
  //   */
  //   };

  const fun = useCallback(() => {
    /*
      If you use useCallback or useMemo and the function you’re memoizing
      is empty or does nothing, your child component might still re-render
      due to reference equality.
    */
    MyConsole.log('CALL ONLY');
  }, []);

  MyConsole.log('Outer-------------------');

  const refInput = useRef();

  const handleChange = () => {
    refInput.current.style.color = 'pink';
    //  console.log('Ref value:', JSON.stringify(refInput.current));
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: dpFont(20)}}>Add : - {value}</Text>
      <Text style={{fontSize: dpFont(20)}}>Minus : - {minus}</Text>
      <Text style={{fontSize: dpFont(30)}}>Multiply : - {useMemmmmo}</Text>
      <TextInput
        style={{width: '60%', height: 30, borderWidth: 1, borderColor: 'red'}}
        ref={refInput}
        //   onChange={handleChange}
      />

      <Button
        //   onPress={() => navigation.navigate(AppScreens.SignUpScreen)}
        onPress={handleChange}
        label={'Signup'}
        style={styles.btnStyl}
      />
      <Button
        label={'Add'}
        onPress={() => setValue(value + 1)}
        style={{width: '50%'}}
      />
      <Button
        label={'Sub'}
        onPress={() => setMinus(minus - 1)}
        style={{width: '50%', marginVertical: 30}}
      />
      <ChildComp fun={fun} minus={minus} />
      <Button
        onPress={() => navigation.navigate(AppScreens.LoginScreen)}
        label={'Login'}
        style={styles.btnStyl}
      />
    </View>
  );
};

export default LoginOption;
