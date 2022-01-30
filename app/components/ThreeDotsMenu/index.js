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
import {useNavigation} from '@react-navigation/native';
import {MAIN_SCREENS} from '../../constants/screen';

const ThreeDotsMenu = ({item, setModal, setSelectedItem}) => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate(MAIN_SCREENS?.CREATE_POST, {item});
  };

  const onDelete = () => {
    setSelectedItem(item);
    setModal(true);
  };
  return (
    <Menu style={styles.mainMenu}>
      <MenuTrigger style={styles.menuTrigger}>
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          size={24}
          color={AppStyles.colorSet.white}
        />
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={styles.ContainerStyle}>
        <MenuOption onSelect={onNavigate}>
          <Text style={styles.menuOption}>Edit</Text>
        </MenuOption>
        <MenuOption onSelect={onDelete}>
          <Text style={styles.menuOption}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
export default ThreeDotsMenu;
