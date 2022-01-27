import React, {forwardRef} from 'react';
import {Text, TextInput} from 'react-native';

const InputComponent = (props, ref) => {
  const {
    placeholder,
    value,
    onChangeText,
    inputStyle,
    secureTextEntry,
    placeholderTextColor,
    touched,
    onBlur,
    errors,
    errorText,
    onSubmitEditing,
    returnKeyType,
    blurOnSubmit,
    returnKeyLabel,
    onKeyPress,
  } = props;

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        style={[inputStyle]}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onKeyPress={onKeyPress}
        ref={ref}
        blurOnSubmit={blurOnSubmit}
      />
      {Boolean(touched) && Boolean(errors) && (
        <Text style={errorText}>{errors}</Text>
      )}
    </>
  );
};
export default forwardRef(InputComponent);
