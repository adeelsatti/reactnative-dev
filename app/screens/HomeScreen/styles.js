import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
  mainViewWrapper: {
    borderRadius: MetricsMod.thirty,
    padding: MetricsMod.thirtyFour,
    backgroundColor: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.thirtyFour,
    shadowColor: AppStyles.colorSet.black,
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 200,
  },
  titleText: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.darkgreen,
  },
  LogoutText: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
  },
  LogoutButton: {
    alignItems: 'center',
    borderRadius: MetricsMod.thirty,
    marginTop: MetricsMod.thirty,
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.nine,
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
});
