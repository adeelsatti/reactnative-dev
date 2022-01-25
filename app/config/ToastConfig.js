import React from 'react';
import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {StyleSheet, Text, View} from 'react-native';
import {AppStyles, MetricsMod} from '../themes';

const ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400',
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red'}}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  tomatoToast: ({text1, text2}) => (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>{text1}</Text>
      <Text style={styles.textStyle2}>{text2}</Text>
    </View>
  ),
};
export default ToastConfig;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.six,
    backgroundColor: 'Tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.normal,
  },
  textStyle2: {
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.colorSet.small,
  },
});
