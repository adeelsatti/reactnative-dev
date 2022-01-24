import {StyleSheet} from 'react-native';

import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: AppStyles.colorSet.offWhiteX,
  },
  orangeOval: {
    position: 'absolute',
    height: 308,
    left: 240,
    top: -158,
    borderRadius: MetricsMod.threeHundred,
    backgroundColor: AppStyles.colorSet.orange,
  },
  imageContainer: {
    flexDirection: 'row',
    marginHorizontal: MetricsMod.twenty,
    marginVertical: MetricsMod.twenty,
    justifyContent: 'space-between',
  },
  logoutImage: {
    width: MetricsMod.sixty,
    height: MetricsMod.sixty,
  },
  userListing: {
    fontSize: AppStyles.fontSet.middleIII,
    fontFamily: AppStyles.fontFamily.robotoBold,
    marginHorizontal: MetricsMod.thirty,
    marginTop: MetricsMod.nine,
    color: AppStyles.colorSet.darkgreen,
  },
  mainItemContainer: {
    flexDirection: 'row',
    marginHorizontal: MetricsMod.thirty,
    marginTop: MetricsMod.nine,
    shadowColor: AppStyles.colorSet.black,
    backgroundColor: AppStyles.colorSet.darkgreen,
    borderRadius: MetricsMod.twenty,
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 1,
  },
  itemTitle: {
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.robotoBold,
    padding: MetricsMod.six,
  },
  itemBody: {
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.robotoRegular,
    padding: MetricsMod.six,
  },
  itemUserID: {
    alignSelf: 'center',
    color: AppStyles.colorSet.orange,
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.robotoMedium,
    padding: MetricsMod.six,
  },
  searchInput: {
    borderRadius: MetricsMod.twenty,
    marginTop: MetricsMod.thirtyEight,
    backgroundColor: AppStyles.colorSet.darkgreen,
  },
  inputTextStyle: {
    color: AppStyles.colorSet.white,
  },
  searchIconColor: {
    tintColor: AppStyles.colorSet.white,
  },
  ItemTextWrapper: {
    flex: 1,
    marginTop: MetricsMod.six,
    marginHorizontal: MetricsMod.thirty,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  menuContainer: {},
  menuButton: {},
  menuWrapper: {
    marginTop: MetricsMod.twenty,
    marginHorizontal: MetricsMod.six,
  },
});
