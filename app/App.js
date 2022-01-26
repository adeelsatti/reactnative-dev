import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';

import MainStackNavigator from './navigation/MainStackNavigator';
import ToastConfig from './config/ToastConfig';

const App = () => {
  return (
    <MenuProvider>
      <MainStackNavigator />
      <Toast config={ToastConfig} />
    </MenuProvider>
  );
};
export default App;
