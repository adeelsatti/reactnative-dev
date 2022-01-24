import {Platform, StyleSheet} from 'react-native';
import {AppStyles, MetricsHorizontal, MetricsMod} from '../../themes';

export default StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: MetricsMod.buttonBorderRadius,
    marginVertical: MetricsMod.baseMargin,
    marginHorizontal: MetricsHorizontal.section,
    paddingLeft: MetricsMod.doubleBaseMargin,
  },
  searchInput: {
    flex: 1,
    height: MetricsMod.marginForty,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.mediumI,
    marginRight: MetricsHorizontal.doubleBaseMargin,
    ...Platform.select({
      ios: {
        paddingVertical: MetricsMod.smallMarginII,
      },
    }),
  },
  searchIcon: {
    height: MetricsMod.doubleBaseMargin,
    width: MetricsMod.doubleBaseMargin,
    marginRight: MetricsMod.smallMargin,
    resizeMode: 'contain',
  },
});
