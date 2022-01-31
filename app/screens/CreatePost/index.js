import React, {useRef, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import styles from './styles';
import InputComponent from '../../components/InputComponent';
import {AppStyles} from '../../themes';
import {createPostSchema} from '../../Schema/createPostSchema';
import ButtonComponent from '../../components/ButtonComponent';
import VectorIcon from '../../components/VectorIcon';
import {CreatePostApi, UpdateApiCall} from '../../ApiCaller/PostApiCall';
import {printLogs} from '../../utils/logUtils';

const CreatePost = props => {
  const [loading, setLoading] = useState(false);

  const item = props?.route?.params?.item;
  const dataLength = props?.route?.params;

  const initialValues = {
    title: item?.id ? item.title : '',
    description: item?.id ? item.body : '',
  };

  const navigation = useNavigation();
  const titleRef = useRef(0);
  const descriptionRef = useRef(0);

  const onFocus = input => {
    input.current.focus();
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const createPostData = async values => {
    const id = dataLength + 1;
    const {response} = await CreatePostApi({
      method: 'POST',
      id: id,
      title: values.title,
      body: values.description,
    });
    printLogs(response);
    if (response?.ok) {
      Toast.show({
        type: 'success',
        text1: 'Post Create Successfully',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Some thing went wrong',
      });
    }
    //navigation.navigate(MAIN_SCREENS.HOME);
  };

  const updateUser = async values => {
    const {response} = await UpdateApiCall(item?.id, {
      method: 'PUT',
      id: item?.id,
      title: values?.title,
      body: values?.description,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createPostSchema}
      onSubmit={async values => {
        item?.id ? await updateUser(values) : await createPostData(values);
      }}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.newPostContainer}>
            <VectorIcon
              name="arrow-back"
              type="Ionicons"
              size={35}
              color={AppStyles.colorSet.white}
              onPress={onBackPress}
            />
            <Text style={styles.newPostText}>Create Post</Text>
          </View>

          <View>
            <InputComponent
              placeholder="Enter Post Title"
              value={values?.title}
              onChangeText={handleChange('title')}
              inputStyle={styles.inputCreatePost}
              placeholderTextColor={AppStyles.colorSet.silverII}
              touched={touched?.title}
              onBlur={() => setFieldTouched('title')}
              errors={errors?.title}
              errorText={styles.errorText}
              ref={titleRef}
              onSubmitEditing={() => onFocus(descriptionRef)}
              multiline={true}
              returnKeyType="next"
              blurOnSubmit={false}
              returnKeyLabel="next"
            />

            <InputComponent
              placeholder="Enter Post Description"
              value={values?.description}
              onChangeText={handleChange('description')}
              inputStyle={styles.inputPostDescription}
              placeholderTextColor={AppStyles.colorSet.silverII}
              touched={touched?.description}
              onBlur={() => setFieldTouched('description')}
              errors={errors?.description}
              errorText={styles.errorText}
              onSubmitEditing={() => handleSubmit}
              ref={descriptionRef}
              returnKeyType="next"
              multiline={true}
              blurOnSubmit={false}
              returnKeyLabel="next"
            />

            <ButtonComponent
              title={item?.id ? 'Update Post' : 'Create Post'}
              buttonStyleWrapper={styles.btnCreatePost}
              buttonText={styles.btnCreatePostText}
              loading={loading}
              onPress={handleSubmit}
            />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default CreatePost;
