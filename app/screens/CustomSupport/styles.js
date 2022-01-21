import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
  },
  textWrapper: {
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.red,
  },
  suspiciousText: {
    padding: MetricsMod.twenty,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.robotoBold,
  },
  descriptiontext: {
    fontSize: AppStyles.fontSet.large,
    alignSelf: 'center',
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.twenty,
  },
  detailText: {
    marginHorizontal: MetricsMod.thirty,
    lineHeight: MetricsMod.thirty,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.normal,
  },
  contactUsContainer: {
    marginTop: MetricsMod.thirty,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyling: {
    marginHorizontal: MetricsMod.thirty,
    lineHeight: MetricsMod.thirty,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.normal,
  },
});
