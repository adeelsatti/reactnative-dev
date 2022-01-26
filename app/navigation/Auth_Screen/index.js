import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AUTH_SCREENS} from '../../constants/screen';
import {
  CustomSupport,
  ForgetPassword,
  LoginScreen,
  ResetPassword,
  SignupScreen,
} from '../../screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const Auth_Screen = () => {
  const check_Login = useSelector(state => state?.users);
  const isSupportIn = check_Login?.is_Support;

  return (
    <Stack.Navigator>
      {!isSupportIn ? (
        <>
          <Stack.Screen
            name={AUTH_SCREENS.LOGIN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AUTH_SCREENS.SIGNUP}
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AUTH_SCREENS.FORGETPASSWORD}
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AUTH_SCREENS.RESETPASSWORD}
            component={ResetPassword}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={AUTH_SCREENS.CUSTOMSUPPORT}
            component={CustomSupport}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
