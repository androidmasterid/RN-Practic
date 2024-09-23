import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppScreens} from '../../constants/AppScreens';
import {styles} from './Style';

const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(AppScreens.HOCExample)}
        style={styles.buttonBox}>
        <Text style={styles.btnText}>HOC Function</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBox}>
        <Text style={styles.btnText}>Function</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
