import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.darkgreen,
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
    fontSize: AppStyles.fontSet.largeII,
    alignSelf: 'center',
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.forty,
    color: AppStyles.colorSet.whiteBlur,
    fontFamily: AppStyles.fontFamily.robotoBoldItalic,
  },
  detailText: {
    marginHorizontal: MetricsMod.thirty,
    lineHeight: MetricsMod.thirty,
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.middleIII,
    fontFamily: AppStyles.fontFamily.robotoMediumItalic,
  },
  contactUsContainer: {
    flex: 1,
    marginTop: MetricsMod.twenty,
    marginHorizontal: MetricsMod.twenty,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyling: {
    lineHeight: MetricsMod.thirty,
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.middleII,
  },
  mailButton: {
    backgroundColor: AppStyles.colorSet.orange,
    borderRadius: MetricsMod.thirty,
    marginHorizontal: MetricsMod.twentySix,
    paddingHorizontal: MetricsMod.twenty,
    padding: MetricsMod.twelve,
  },
});
