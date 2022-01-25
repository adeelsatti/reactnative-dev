import {AppStyles, MetricsMod} from '../../themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainMenu: {},
  ContainerStyle: {
    padding: MetricsMod.nine,
    width: MetricsMod.hundredThirty,
    borderRadius: MetricsMod.six,
  },
  menuTrigger: {},
  menuOption: {
    fontFamily: AppStyles.fontFamily.robotoBold,
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
  },
});
