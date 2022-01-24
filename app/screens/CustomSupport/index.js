import React, {useEffect} from 'react';
import {BackHandler, Linking, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {is_Support} from '../../redux/Actions/AuthActions';
import {useDispatch} from 'react-redux';

const CustomSupport = () => {
  const mail = 'hr@echt-tech.com';
  const phoneNumber = '+(11) 11111 1111';

  const dispatch = useDispatch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const handleLinking = async url => {
    await Linking.openURL(url);
    dispatch(is_Support(false));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textWrapper}>
        <Text style={styles.suspiciousText}>Suspicious Login Attempt</Text>
      </View>

      <Text style={styles.descriptiontext}>
        We Detected an Unusual Login Attempt
      </Text>

      <Text style={styles.detailText}>
        To secure your account, we'll send you a security code to verify your
        identity. How do you want to receive your code?
      </Text>

      <View style={styles.contactUsContainer}>
        <TouchableOpacity
          style={styles.mailButton}
          onPress={() => handleLinking('mailto:' + mail)}>
          <Text style={styles.textStyling}>Email</Text>
        </TouchableOpacity>

        <Text style={styles.textStyling}>OR</Text>

        <TouchableOpacity
          style={styles.mailButton}
          onPress={() => handleLinking('tel:' + phoneNumber)}>
          <Text style={styles.textStyling}>Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomSupport;
