import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Auth_Screen} from './Auth_Screen';
import {App_Screens} from './App_Screen';

const MainStackNavigator = () => {
  const check_Login = useSelector(state => state?.users);
  const isSignedIn = check_Login?.is_Login;

  return (
    <NavigationContainer>
      {!isSignedIn ? <Auth_Screen /> : <App_Screens />}
    </NavigationContainer>
  );
};

export default MainStackNavigator;
