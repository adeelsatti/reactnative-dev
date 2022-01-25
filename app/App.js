import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';

import MainStackNavigator from './navigation/MainStackNavigator';

const App = () => {
  return (
    <MenuProvider>
      <MainStackNavigator />
      <Toast />
    </MenuProvider>
  );
};
export default App;
