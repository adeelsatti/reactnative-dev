import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
  } = props || {};
  console.log(isRightIcon);
  return (
    <View>
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
            color={AppStyles.colorSet.black}
          />
        )}
        <Text style={buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonComponent;
