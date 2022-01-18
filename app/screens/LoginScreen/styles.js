import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
  },
  imageContainer: {
    height: 300,
  },
  ovalShapeViewOrange: {
    width: 500,
    height: 478,
    left: -200,
    top: -220,
    position: 'absolute',
    borderRadius: MetricsMod.threeHundred,
    backgroundColor: AppStyles.colorSet.orange,
  },
  ovalShapeViewGreen: {
    width: 460,
    height: 360,
    position: 'absolute',
    borderRadius: MetricsMod.threeHundred,
    left: 220,
    top: -110,
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
  welcomeText: {
    width: 197,
    left: 18,
    top: 100,
    position: 'absolute',
    fontSize: AppStyles.fontSet.xxlarge,
    lineHeight: AppStyles.fontSet.xxxlarge,
    fontFamily: AppStyles.fontFamily.robotoBold,
    color: AppStyles.colorSet.white,
  },
  textInputContainer: {},
  inputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: MetricsMod.thirty,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.xmiddle,
    borderBottomColor: AppStyles.colorSet.blackXXXXXX,
  },
  forgetButton: {
    marginHorizontal: MetricsMod.thirty,
    marginVertical: MetricsMod.twenty,
  },
  forgetText: {
    color: AppStyles.colorSet.black,
    fontFamily: AppStyles.fontFamily.robotoRegular,
  },
  buttonSignin: {
    backgroundColor: AppStyles.colorSet.darkgreen,
    flexDirection: 'row',
    paddingVertical: MetricsMod.twelve,
    paddingHorizontal: MetricsMod.twelve,
    marginHorizontal: MetricsMod.thirty,
    borderRadius: MetricsMod.twelve,
    justifyContent: 'center',
  },
  buttonText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.xmiddle,
    lineHeight: MetricsMod.twenty,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
