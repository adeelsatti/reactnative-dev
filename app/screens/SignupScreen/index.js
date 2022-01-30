import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ImageCropPicker from 'react-native-image-crop-picker';
import MaskInput from 'react-native-mask-input/src/MaskInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {ReactNativeModal} from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import _ from 'lodash';

import styles from './styles';
import VectorIcon from '../../components/VectorIcon';
import {AppStyles, Images} from '../../themes';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {signUpValidationSchema} from '../../Schema/signUpValidationSchema';
import {addNewUser, resetError} from '../../redux/Actions/AuthActions';
import {AUTH_SCREENS} from '../../constants/screen';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(false);
  const [modal, setModal] = useState();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const nextRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneRef = useRef();
  const dobRef = useRef();

  const dispatch = useDispatch();
  const duplicateEmailError = useSelector(state => state?.users?.error);
  const users = useSelector(state => state?.users.users);
  const lastUser = users[users.length - 1];
  const firstUser = users[0];

  let initialValues = {
    profileImage: lastUser?.profileImage,
    fName: lastUser?.fName,
    lName: lastUser?.lName,
    email: lastUser?.mail,
    password: lastUser?.password,
    confirmPassword: lastUser?.password,
    gender: lastUser?.gender,
    phone: lastUser?.phoneNumber,
    dob: lastUser?.dob,
  };

  let firstUserValue = {
    profileImage: firstUser?.profileImage,
    fName: firstUser?.fName,
    lName: firstUser?.lName,
    email: firstUser?.mail,
    password: firstUser?.password,
    confirmPassword: firstUser?.password,
    gender: firstUser?.gender,
    phone: firstUser?.phoneNumber,
    dob: firstUser?.dob,
  };

  useEffect(() => {
    dispatch(resetError());
  }, [lastUser]);

  const captureImage = async handleChange => {
    const img = await ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    const imageCamera = {uri: img?.path};
    handleChange(imageCamera?.uri);
    setModal(false);
  };

  const galleryImage = async handleChange => {
    const img = await ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    const imageCamera = {uri: img?.path};
    setModal(false);
    handleChange(imageCamera?.uri);
  };

  const removeImage = handleChange => {
    handleChange();
    setModal(false);
  };

  const handleModal = () => {
    setModal(true);
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  const onSignIn = () => {
    navigation.navigate(AUTH_SCREENS.LOGIN);
  };

  const onCancel = () => {
    setModal(false);
  };

  const focus = input => {
    input.current.focus();
  };

  const addUser = values => {
    let {phone, confirmPassword, profileImage, email, ...value} = values;
    const phoneNumber = phone.replace(/[^\d]/g, '');
    const mail = email.toLowerCase();

    if (!profileImage) {
      const newValues = {...value, mail, phoneNumber};
      dispatch(addNewUser(newValues));
      setLoading(false);
    } else {
      const newValues = {...value, mail, profileImage, phoneNumber};
      dispatch(addNewUser(newValues));
      setLoading(false);
    }
  };

  const dispatchUser = values => {
    setLoading(true);
    _.delay(() => addUser(values), 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={(values, {resetForm}) => {
        dispatchUser(values);
        setImage(true);
        resetForm({values: firstUserValue});
      }}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <View style={styles.mainContainer}>
          <KeyboardAwareScrollView style={styles.keyboardHandle}>
            <Image source={Images.ellipseImage1} style={styles.ovalShapeView} />

            <VectorIcon
              name="chevron-back"
              type={'Ionicons'}
              size={30}
              color={AppStyles.colorSet.white}
              style={styles.backButton}
              onPress={onGoBack}
            />

            <Text style={styles.createAccountText}>Create {'\n'}Account</Text>

            <TouchableOpacity onPress={handleModal} style={styles.uploadImage}>
              <Image
                source={
                  image
                    ? {uri: firstUserValue?.profileImage}
                    : {uri: initialValues?.profileImage}
                }
                style={styles.uploadImage}
              />
            </TouchableOpacity>
            {Boolean(duplicateEmailError) && (
              <Text style={styles.errorSignupText}>{duplicateEmailError}</Text>
            )}

            <InputComponent
              placeholder="First Name"
              placeholderTextColor={AppStyles.colorSet.black}
              value={values?.fName}
              onChangeText={handleChange('fName')}
              onBlur={() => setFieldTouched('fName')}
              inputStyle={styles.textInputName}
              errorText={styles.errorSignupText}
              touched={touched?.fName}
              errors={errors?.fName}
              onSubmitEditing={() => focus(nextRef)}
              returnKeyType="next"
              returnKeyLabel="next"
              ref={inputRef}
              blurOnSubmit={false}
            />

            <InputComponent
              placeholder="Last Name"
              placeholderTextColor={AppStyles.colorSet.black}
              value={values?.lName}
              onChangeText={handleChange('lName')}
              onBlur={() => setFieldTouched('lName')}
              inputStyle={styles.textInputName}
              errorText={styles.errorSignupText}
              touched={touched?.lName}
              errors={errors?.lName}
              ref={nextRef}
              onSubmitEditing={() => focus(emailRef)}
              returnKeyType="next"
              returnKeyLabel="next"
              blurOnSubmit={false}
            />

            <InputComponent
              placeholder="Email"
              placeholderTextColor={AppStyles.colorSet.black}
              value={values?.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              inputStyle={styles.textInputName}
              touched={touched?.email}
              errors={errors?.email}
              ref={emailRef}
              onSubmitEditing={() => focus(passwordRef)}
              errorText={styles.errorSignupText}
              returnKeyType="next"
              returnKeyLabel="next"
              blurOnSubmit={false}
            />

            <InputComponent
              placeholder="Password"
              placeholderTextColor={AppStyles.colorSet.black}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              inputStyle={styles.textInputName}
              secureTextEntry={true}
              touched={touched?.password}
              errors={errors?.password}
              errorText={styles.errorSignupText}
              onSubmitEditing={() => focus(confirmPasswordRef)}
              ref={passwordRef}
              returnKeyType="next"
              returnKeyLabel="next"
              blurOnSubmit={false}
            />

            <InputComponent
              placeholder="Confirm Password"
              placeholderTextColor={AppStyles.colorSet.black}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              inputStyle={styles.textInputName}
              secureTextEntry={true}
              touched={touched?.confirmPassword}
              errors={errors?.confirmPassword}
              errorText={styles.errorSignupText}
              ref={confirmPasswordRef}
              onSubmitEditing={() => focus(phoneRef)}
              returnKeyType="next"
              returnKeyLabel="next"
              blurOnSubmit={false}
            />

            <RadioButton.Group
              onValueChange={handleChange('gender')}
              onBlur={handleChange('gender')}
              blurOnSubmit={false}
              value={values?.gender}>
              <View style={styles.radioContainer}>
                <View>
                  <Text style={styles.genderText}>Male</Text>
                  <RadioButton value="M" />
                </View>
                <View>
                  <Text style={styles.genderText}>Female</Text>
                  <RadioButton value="F" />
                </View>
              </View>
            </RadioButton.Group>
            {touched?.gender && errors?.gender && (
              <Text style={styles.errorSignupText}>{errors?.gender}</Text>
            )}

            <MaskInput
              value={values?.phone}
              style={styles.textInputName}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              ref={phoneRef}
              keyboardType="numeric"
              returnKeyType="next"
              returnKeyLabel="next"
              mask={[
                '(',
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
            {touched?.phone && errors?.phone && (
              <Text style={styles.errorSignupText}>{errors?.phone}</Text>
            )}

            <DatePicker
              style={styles.datePicker}
              date={values?.dob}
              initialValue={new Date(moment('1994/1/1', 'DD-MM-YYYY'))}
              mode="date"
              placeholder="Select date"
              format="DD/MM/YYYY"
              minDate="01-01-1950"
              maxDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              blurOnSubmit={false}
              ref={dobRef}
              onSubmitEditing={() => handleSubmit}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderBottomColor: AppStyles.colorSet.white,
                  alignItems: 'flex-start',
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: AppStyles.colorSet.black,
                },
                dateText: {
                  fontSize: 17,
                  color: AppStyles.colorSet.white,
                },
              }}
              onDateChange={handleChange('dob')}
              onBlur={() => setFieldTouched('dob')}
            />
            {touched?.dob && errors?.dob && (
              <Text style={styles.errorSignupText}>{errors?.dob}</Text>
            )}

            <ReactNativeModal
              isVisible={modal}
              coverScreen={true}
              hasBackdrop={true}
              onBackdropPress={() => setModal(false)}>
              <View style={styles.modalContainer}>
                <Text style={styles.selectImage}>Select Image</Text>
                <TouchableOpacity
                  onPress={() => captureImage(handleChange('profileImage'))}>
                  <Text style={styles.cameraOption}>Take Photo...</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => galleryImage(handleChange('profileImage'))}>
                  <Text style={styles.cameraOption}>
                    Choose from Library...
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => removeImage(handleChange('profileImage'))}>
                  <Text style={styles.cameraOption}>Remove Image</Text>
                </TouchableOpacity>

                <View style={styles.buttonHandler}>
                  <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.buttonCancel}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ReactNativeModal>

            <ButtonComponent
              title="SIGN UP"
              buttonStyleWrapper={styles.buttonSignup}
              buttonText={styles.buttonSignupText}
              onPress={handleSubmit}
              loading={loading}
            />
          </KeyboardAwareScrollView>

          <View style={styles.handleSignupText}>
            <Text style={styles.haveAnSignupAccountText}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={onSignIn}>
              <Text style={styles.signinButton}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignupScreen;
