import React from 'react';
import {Image, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {AppStyles, Images} from '../../themes';

export default function SearchInput(props) {
  const {
    onChangeText,
    value,
    containerStyles,
    placeholder,
    inputTextStyle,
    multiline,
    returnKey,
    showSearchIcon,
    searchIconColor,
  } = props;

  return (
    <View style={[styles.searchContainer, containerStyles]}>
      {showSearchIcon && (
        <Image
          source={Images.searchIcon}
          style={[styles.searchIcon, searchIconColor]}
        />
      )}
      <TextInput
        value={value}
        autoCorrect={false}
        style={[styles.searchInput, inputTextStyle]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={AppStyles.colorSet.darkgreen}
        returnKeyType={returnKey}
        multiline={multiline}
        numberOfLines={1}
      />
    </View>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  returnKey: PropTypes.string,
  onChangeText: PropTypes.func,
  containerStyles: PropTypes.object,
  inputTextStyle: PropTypes.object,
  showSearchIcon: PropTypes.bool,
  multiline: PropTypes.bool,
};

SearchInput.propTypes = {
  value: PropTypes.string,
  returnKey: PropTypes.string,
  onChangeText: PropTypes.func,
  containerStyles: PropTypes.object,
  inputTextStyle: PropTypes.object,
  showSearchIcon: PropTypes.bool,
  multiline: PropTypes.bool,
};

SearchInput.defaultProps = {
  value: '',
  returnKey: 'search',
  onChangeText: () => {},
  containerStyles: {},
  inputTextStyle: {},
  showSearchIcon: false,
  multiline: false,
};
