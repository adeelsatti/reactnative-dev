import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import VectorIcon from '../VectorIcon';
import {AppStyles} from '../../themes';

const ButtonComponent = props => {
  const {
    title,
    onPress,
    disabled,
    buttonStyleWrapper,
    buttonText,
    isRightIcon = false,
    iconType,
    iconName,
    iconSize,
    iconColor,
    loading,
  } = props || {};

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyleWrapper]}
      activeOpacity={0.9}
      disabled={disabled}
      onPress={onPress}>
      {Boolean(isRightIcon) && (
        <VectorIcon
          type={iconType}
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      )}
      {!loading ? (
        <Text style={buttonText}>{title}</Text>
      ) : (
        <ActivityIndicator size="small" color={AppStyles.colorSet.pink} />
      )}
    </TouchableOpacity>
  );
};
export default ButtonComponent;
