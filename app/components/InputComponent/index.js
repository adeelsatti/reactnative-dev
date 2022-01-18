import React from 'react';
import {TextInput, View} from 'react-native';
import {AppStyles} from '../../themes';

const InputComponent = props => {
  const {
    placeholder,
    value,
    onChangeText,
    containerStyle,
    inputStyle,
    secureTextEntry,
  } = props;
  console.log(props);
  return (
    <View style={[containerStyle]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={AppStyles.colorSet.silver}
        onChangeText={onChangeText}
        style={[inputStyle]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default InputComponent;
