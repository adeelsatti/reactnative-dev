import React from 'react';
import {Text, TextInput} from 'react-native';

const InputComponent = props => {
  const {
    placeholder,
    value,
    onChangeText,
    inputStyle,
    secureTextEntry,
    placeholderTextColor,
    touched,
    errors,
    errorText,
    onSubmitEditing,
    returnKeyType,
    returnKeyLabel,
  } = props;

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        style={[inputStyle]}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
      />
      {Boolean(touched) && Boolean(errors) && (
        <Text style={errorText}>{errors}</Text>
      )}
    </>
  );
};
export default InputComponent;
