import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import VectorIcon from '../VectorIcon';

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
  } = props || {};
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyleWrapper]}
      activeOpacity={0.9}
      disabled={disabled}
      onPress={onPress}>
      {isRightIcon && (
        <VectorIcon
          type={iconType}
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      )}
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
