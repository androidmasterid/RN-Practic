import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {StyleSheet} from 'react-native';
import {CommonStyle} from '../common/CommonStyle';
import Header from '../common/Header';
import {AppColors} from '../constants/AppColors';
import {AppScreens} from '../constants/AppScreens';
import {FontSize} from '../constants/FontSize';
import {Tab1, Tab2} from '../constants/Icons';
import {
  DashboardScreen,
  LoginOption,
  LoginScreen,
  ProfileScreen,
  SignUpScreen,
} from '../screens/ScreenName';
import {dpHeight, dpWidth} from '../utilities/SizeInDp';

const AuthStack = createNativeStackNavigator();
const header = ({navigation, route, options, back}) => (
  <Header navigation={navigation} route={route.name} title={options.title} />
);

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={({route}) => ({
        header,
      })}
      initialRouteName={AppScreens.LoginOption}>
      <AuthStack.Screen
        name={AppScreens.LoginOption}
        component={LoginOption}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name={AppScreens.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name={AppScreens.SignUpScreen}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

const DashboardStack = createNativeStackNavigator();
export const DashboardNavigation = ({navigation, route}) => {
  return (
    <DashboardStack.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        header,
      })}
      initialRouteName={AppScreens.DashboardScreen}>
      <DashboardStack.Screen
        name={AppScreens.DashboardScreen}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </DashboardStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator();
export const ProfileNavigation = ({navigation, route}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        header,
      })}
      initialRouteName={AppScreens.ProfileScreen}>
      <ProfileStack.Screen
        name={AppScreens.ProfileScreen}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppScreens.Home}
      screenOptions={({route, focused}) => ({
        keyboardHidesTabBar: true,
        tabBarActiveTintColor: AppColors.black,
        tabBarInactiveTintColor: '#a2a2a2',
        headerShown: false,
        tabBarStyle: {
          //  display: user_type_is_guest ? 'none' : undefined,
          //  ...(Platform.OS == 'ios' ? styles.tabBarIOS : styles.tabBarAndroid),
        },
        tabBarLabelStyle: '',
      })}>
      <Tab.Screen
        name={AppScreens.Home}
        component={DashboardNavigation}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Tab1
              height={dpHeight(24)}
              width={dpHeight(24)}
              color={focused ? AppColors.black : '#898989'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={AppScreens.Profile}
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Tab2
              height={dpHeight(24)}
              width={dpHeight(24)}
              color={focused ? AppColors.black : '#898989'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CombineStack = createNativeStackNavigator();
export const CombineNavigation = () => {
  return (
    <CombineStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppScreens.AuthStack}>
      <CombineStack.Screen
        name={AppScreens.AuthStack}
        component={AuthStackNavigation}
      />
      <CombineStack.Screen
        name={AppScreens.TabStack}
        component={TabNavigation}
      />
    </CombineStack.Navigator>
  );
};

export const navigationRef = createNavigationContainerRef();
export function reset(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const styles = StyleSheet.create({
  tabBarAndroid: {
    height: dpWidth(50),
    padding: dpWidth(8),
    backgroundColor: AppColors.loginbg_color,
  },
  tabLabelAndroid: {
    marginTop: dpHeight(2),
    paddingBottom: dpHeight(5),
    // fontWeight: '700',
    fontSize: FontSize.FONT_SMALL,
  },

  tabBarIOS: {
    padding: dpWidth(8),
    height: dpHeight(50),
    backgroundColor: AppColors.loginbg_color,
  },
  tabLabelIOS: {
    marginVertical: '2%',
    paddingBottom: dpHeight(5),
    fontSize: FontSize.FONT_SMALL,
    ...CommonStyle.FontFamilyMedium,
  },
});
