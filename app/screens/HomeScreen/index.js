import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';

import styles from './styles';
import {is_Login} from '../../redux/Actions/AuthActions';
import useApiFetch from '../../hooks/useApiFetch';
import EmptyComponent from '../../components/EmptyComponent';
import {AppStyles, Images} from '../../themes';
import SearchInput from '../../components/SearchInput';
import {FloatingButtonAction} from '../../constants/floatingButtonAction';
import ThreeDotsMenu from '../../components/ThreeDotsMenu';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const {loading, error, data} = useApiFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );
  console.log(error);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(is_Login(false));
  };
  const onRenderUsers = ({item}) => {
    return (
      <View style={styles.mainItemContainer}>
        <View style={styles.ItemTextWrapper}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>User ID:</Text>
            <Text style={styles.itemBody}>{item?.id}</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>Title:</Text>
            <Text style={styles.itemBody}> {item?.title}</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>Body:</Text>
            <Text style={styles.itemBody}>{item?.body}</Text>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableOpacity style={styles.menuButton}>
            <ThreeDotsMenu />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onChangeSearch = search => {
    setSearch(search);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.ellipseImage1} style={styles.orangeOval} />

      <View style={styles.imageContainer}>
        <Text style={styles.userListing}>User Listing</Text>
        <TouchableOpacity onPress={onLogout}>
          <Image source={Images.logoutIcon} style={styles.logoutImage} />
        </TouchableOpacity>
      </View>

      <SearchInput
        value={search}
        autoFocus={true}
        containerStyles={styles.searchInput}
        showSearchIcon={true}
        inputTextStyle={styles.inputTextStyle}
        onChangeText={onChangeSearch}
        placeholder={'Search...'}
        searchIconColor={styles.searchIconColor}
      />
      <FlatList
        data={data}
        renderItem={onRenderUsers}
        keyExtractor={(item, index) => item?.id || index}
        ListEmptyComponent={<EmptyComponent loading={loading} error={error} />}
      />
      <FloatingAction
        actions={FloatingButtonAction}
        onPressItem={item => {
          console.log(`Selected Button' ${item}`);
        }}
        color={AppStyles.colorSet.orange}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
