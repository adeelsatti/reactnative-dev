import React from 'react';
import {Text} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

import {AppStyles} from '../../themes';
import styles from './styles';
import VectorIcon from '../VectorIcon';

const ThreeDotsMenu = () => {
  return (
    <Menu style={styles.mainMenu}>
      <MenuTrigger style={styles.menuTrigger}>
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          size={24}
          color={AppStyles.colorSet.grey}
        />
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={styles.ContainerStyle}>
        <MenuOption>
          <Text style={styles.menuOption}>Update</Text>
        </MenuOption>
        <MenuOption>
          <Text style={styles.menuOption}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
export default ThreeDotsMenu;
