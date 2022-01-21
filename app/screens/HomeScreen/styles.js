import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.colorSet.white,
  },
  titleText: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.black,
  },
  LogoutText: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.blue,
  },
  LogoutButton: {
    borderRadius: MetricsMod.thirty,
    borderWidth: 1,
    marginTop: MetricsMod.thirty,
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.nine,
    backgroundColor: AppStyles.colorSet.mainButtonColor,
  },
});
