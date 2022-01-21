import React, {useEffect} from 'react';
import {BackHandler, Linking, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const CustomSupport = () => {
  const mail = 'hr@echt-tech.com';
  const phoneNumber = '+(11) 11111 1111';

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const handleLinking = async url => {
    await Linking.openURL(url);
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
        <Text style={styles.textStyling}>Mail Us:</Text>
        <TouchableOpacity onPress={() => handleLinking('mailto:' + mail)}>
          <Text style={styles.textStyling}>{mail}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactUsContainer}>
        <Text style={styles.textStyling}>Call Us:</Text>
        <TouchableOpacity onPress={() => handleLinking('tel:' + phoneNumber)}>
          <Text style={styles.textStyling}>{phoneNumber}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomSupport;
