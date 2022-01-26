import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
  keyboardAwareScrollView: {
    marginBottom: MetricsMod.twenty,
  },
  headerContainer: {
    padding: MetricsMod.six,
    flexDirection: 'row',
    backgroundColor: AppStyles.colorSet.white,
    alignItems: 'center',
    paddingHorizontal: MetricsMod.twenty,
  },
  forgetPassword: {
    alignSelf: 'center',
    paddingHorizontal: MetricsMod.fifty,
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.black,
  },
  forgotPasswordImage: {
    alignSelf: 'center',
  },
  bodyContainer: {
    marginTop: MetricsMod.twenty,
  },
  description: {
    marginTop: MetricsMod.twenty,
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.normal,
    lineHeight: MetricsMod.thirty,
    alignSelf: 'center',
  },
  inputStyle: {
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.six,
    marginHorizontal: MetricsMod.thirty,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.xmiddle,
    marginTop: MetricsMod.twenty,
    paddingHorizontal: MetricsMod.twelve,
  },
  buttonSendEmail: {
    backgroundColor: AppStyles.colorSet.orange,
    alignSelf: 'flex-end',
    paddingVertical: MetricsMod.twelve,
    paddingHorizontal: MetricsMod.thirtyFour,
    marginHorizontal: MetricsMod.thirty,
    borderRadius: MetricsMod.twelve,
    justifyContent: 'center',
    marginTop: MetricsMod.twenty,
  },
  buttonText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.medium,
    lineHeight: MetricsMod.twenty,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginHorizontal: MetricsMod.thirty,
    marginTop: MetricsMod.six,
    color: AppStyles.colorSet.orange,
    fontSize: AppStyles.fontSet.small,
  },
});
