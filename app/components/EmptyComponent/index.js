import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

import styles from './styles';
import {AppStyles, Images} from '../../themes';

const EmptyComponent = ({loading, error}) => {
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={AppStyles.colorSet.orange} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.imageContainer}>
        <Image source={Images.noInternet} style={styles.notFoundImage} />
      </View>
    );
  }

  return (
    <View style={styles.imageContainer}>
      <Image source={Images.defaultImage} style={styles.notFoundImage} />
    </View>
  );
};

export default EmptyComponent;
