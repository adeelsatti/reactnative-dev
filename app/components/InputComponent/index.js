import React from 'react';
import {TextInput} from 'react-native';

const InputComponent = props => {
  const {
    placeholder,
    value,
    onChangeText,
    inputStyle,
    secureTextEntry,
    placeholderTextColor,
  } = props;

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      style={[inputStyle]}
      secureTextEntry={secureTextEntry}
    />
  );
};
export default InputComponent;
