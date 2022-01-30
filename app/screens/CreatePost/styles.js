import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
  newPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MetricsMod.twenty,
    marginHorizontal: MetricsMod.thirty,
  },
  newPostText: {
    fontSize: AppStyles.fontSet.middleIII,
    color: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.eighty,
    fontFamily: AppStyles.fontFamily.robotoBold,
  },
  inputCreatePost: {
    marginHorizontal: MetricsMod.thirty,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.six,
    paddingHorizontal: MetricsMod.twelve,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.xmiddle,
    marginTop: MetricsMod.thirty,
  },
  inputPostDescription: {
    marginHorizontal: MetricsMod.thirty,
    height: MetricsMod.twoHundred,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.six,
    paddingHorizontal: MetricsMod.twelve,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.xmiddle,
    marginTop: MetricsMod.thirty,
    textAlignVertical: 'top',
  },
  errorText: {
    marginHorizontal: MetricsMod.thirty,
    color: AppStyles.colorSet.red,
  },
  btnCreatePost: {
    backgroundColor: AppStyles.colorSet.orange,
    marginHorizontal: MetricsMod.thirty,
    borderRadius: MetricsMod.six,
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.twelve,
    marginTop: MetricsMod.twentyFive,
    alignItems: 'center',
  },
  btnCreatePostText: {
    fontSize: AppStyles.fontSet.middle,
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.robotoBold,
  },
});
