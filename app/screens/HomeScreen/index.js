import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {is_Login} from '../../redux/Actions/AuthActions';
import {AUTH_SCREENS} from '../../constants/screen';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogout = () => {
    dispatch(is_Login(false));
    navigation.navigate(AUTH_SCREENS.LOGIN);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainViewWrapper}>
        <Text style={styles.titleText}>Login Successfully</Text>

        <TouchableOpacity style={styles.LogoutButton} onPress={onLogout}>
          <Text style={styles.LogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
