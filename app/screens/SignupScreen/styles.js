import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
  loading: {
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
  },
  keyboardHandle: {
    marginVertical: MetricsMod.six,
  },
  profileImage: {
    borderRadius: MetricsMod.fifty,
    borderWidth: 1,
    borderColor: AppStyles.colorSet.white,
    alignSelf: 'center',
    padding: 50,
  },
  ovalShapeView: {
    width: 297,
    height: 308,
    left: 240,
    top: -158,
    position: 'absolute',
    borderRadius: MetricsMod.threeHundred,
    backgroundColor: AppStyles.colorSet.orange,
  },
  backButton: {
    marginTop: MetricsMod.six,
    padding: MetricsMod.twelve,
  },
  createAccountText: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.large,
    lineHeight: AppStyles.fontSet.large,
    color: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.six,
  },
  textInputName: {
    borderBottomWidth: 1,
    marginHorizontal: MetricsMod.thirty,
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.medium,
    borderBottomColor: AppStyles.colorSet.white,
  },
  buttonSignup: {
    backgroundColor: AppStyles.colorSet.orange,
    flexDirection: 'row',
    paddingVertical: MetricsMod.twelve,
    paddingHorizontal: MetricsMod.twelve,
    marginHorizontal: MetricsMod.thirty,
    borderRadius: MetricsMod.twelve,
    marginTop: MetricsMod.twenty,
    justifyContent: 'center',
  },
  buttonSignupText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.xmiddle,
    lineHeight: MetricsMod.twenty,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  footerSignupText: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  haveAnSignupAccountText: {
    padding: MetricsMod.six,
    fontFamily: AppStyles.fontFamily.robotoRegular,
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.medium,
  },
  signinButton: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.medium,
    lineHeight: MetricsMod.twenty,
    color: AppStyles.colorSet.darkgreen,
  },
  handleSignupText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.colorSet.orange,
  },
  uploadImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: MetricsMod.hundred,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: MetricsMod.six,
  },
  genderText: {
    fontSize: AppStyles.fontSet.medium,
    fontFamily: AppStyles.fontFamily.robotoBold,
    color: AppStyles.colorSet.white,
  },
  errorSignupText: {
    marginHorizontal: MetricsMod.thirty,
    marginTop: MetricsMod.six,
    color: AppStyles.colorSet.red,
    fontSize: 12,
  },
  datePicker: {
    marginHorizontal: MetricsMod.thirty,
    marginTop: MetricsMod.six,
    width: '85%',
  },
  dateIcon: {
    borderColor: 'gray',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.thirty,
    marginTop: MetricsMod.twelve,
  },
  modalContainer: {
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.nine,
  },
  dateTextHandle: {
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.medium,
  },
  buttonHandler: {
    alignItems: 'flex-end',
    marginHorizontal: MetricsMod.thirty,
  },
  selectImage: {
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.robotoBold,
    color: AppStyles.colorSet.black,
    paddingVertical: MetricsMod.nine,
    paddingHorizontal: MetricsMod.nine,
  },
  cameraOption: {
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.robotoRegular,
    color: AppStyles.colorSet.black,
    paddingVertical: MetricsMod.nine,
    paddingHorizontal: MetricsMod.nine,
  },
  buttonCancel: {
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.robotoBold,
    color: AppStyles.colorSet.black,
    paddingVertical: MetricsMod.nine,
    paddingHorizontal: MetricsMod.nine,
  },
});
