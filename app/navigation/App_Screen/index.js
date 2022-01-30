import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MAIN_SCREENS} from '../../constants/screen';
import {CreatePost, HomeScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const App_Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MAIN_SCREENS.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.CREATE_POST}
        component={CreatePost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
