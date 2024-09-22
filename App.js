import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import {CombineNavigation, navigationRef} from './src/routes/Routes';

const App = () => {
  enableFreeze(true);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <CombineNavigation />
        {/* <CheckInternet /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
