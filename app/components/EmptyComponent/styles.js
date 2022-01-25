import {StyleSheet} from 'react-native';
import {MetricsMod} from '../../themes';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: MetricsMod.thirty,
  },
  notFoundImage: {
    flex: 1,
    resizeMode: 'contain',
    paddingHorizontal: 20,
  },
});
