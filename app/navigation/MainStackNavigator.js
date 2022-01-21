import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {AUTH_SCREENS, MAIN_SCREENS} from '../constants/screen';
import {CustomSupport, LoginScreen, SignupScreen} from '../screens';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const check_Login = useSelector(state => state?.users);
  const isSignedIn = check_Login?.is_Login;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isSignedIn ? (
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
              name={AUTH_SCREENS.CUSTOMSUPPORT}
              component={CustomSupport}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={MAIN_SCREENS.HOME}
              component={HomeScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
