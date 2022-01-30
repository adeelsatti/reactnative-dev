import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {ReactNativeModal} from 'react-native-modal';

import styles from './styles';
import {is_Login} from '../../redux/Actions/AuthActions';
import EmptyComponent from '../../components/EmptyComponent';
import {AppStyles, Images} from '../../themes';
import SearchInput from '../../components/SearchInput';
import ThreeDotsMenu from '../../components/ThreeDotsMenu';
import {MAIN_SCREENS} from '../../constants/screen';
import {DeleteApiCall, FetchPostAPI} from '../../ApiCaller/PostApiCall';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(null);

  const fetchPostData = async () => {
    try {
      setLoading(true);
      const {result} = await FetchPostAPI();
      setData(result);
      setLoading(false);
      setFetching(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [fetching]);

  const dataLength = data?.length;
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
            <ThreeDotsMenu
              item={item}
              setModal={setModal}
              setSelectedItem={setSelectedItem}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onChangeSearch = search => {
    setSearch(search);
  };

  const onCreatePost = () => {
    navigation.navigate(MAIN_SCREENS.CREATE_POST, dataLength);
  };

  const onDone = async () => {
    const {response} = await DeleteApiCall(selectedItem?.id, {
      method: 'DELETE',
    });
    if (response?.ok) {
      Toast.show({
        type: 'success',
        text1: 'Delete Post Successful',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'something went wrong',
      });
      setModal(false);
    }
  };

  const onCancel = () => {
    setModal(false);
  };

  const onRefresh = () => {
    setFetching(true);
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
        onRefresh={onRefresh}
        refreshing={fetching}
      />

      <FloatingAction
        onPressMain={onCreatePost}
        color={AppStyles.colorSet.orange}
      />

      <ReactNativeModal
        isVisible={modal}
        coverScreen={true}
        hasBackdrop={true}
        onBackdropPress={() => setModal(false)}>
        <View style={styles.removeContainer}>
          <Text style={styles.confirmText}>
            Are you sure you want to delete this user ?
          </Text>

          <View style={styles.removeButtonContainer}>
            <TouchableOpacity
              style={styles.confirmDeleteButton}
              onPress={onDone}>
              <Text style={styles.deleteText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmCancelButton}
              onPress={onCancel}>
              <Text style={styles.deleteText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default HomeScreen;
