import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ImageCropPicker from 'react-native-image-crop-picker';
import MaskInput from 'react-native-mask-input/src/MaskInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import DatePicker from 'react-native-datepicker';
import {ReactNativeModal} from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import image1 from '../../../assets/Images/Ellipse1.png';
import uploadImage from '../../../assets/Images/uploadImage.png';
import VectorIcon from '../../components/VectorIcon';
import {AppStyles} from '../../themes';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {signUpValidationSchema} from '../../Schema/signUpValidationSchema';
import {addNewUser} from '../../redux/Actions/AuthActions';
import {AUTH_SCREENS} from '../../constants/screen';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [checked, setChecked] = useState();
  const [modal, setModal] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const emailError = useSelector(state => state?.users);

  const captureImage = async () => {
    const img = await ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    setImage({uri: img?.path});
    setModal(false);
  };

  const galleryImage = async () => {
    const img = await ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    setImage({uri: img?.path});
    setModal(false);
  };

  const handleModal = () => {
    setModal(true);
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  const onCancel = () => {
    setModal(false);
  };

  const dispatchUser = async values => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addNewUser(values));
      setLoading(false);
      navigation.navigate(AUTH_SCREENS.LOGIN);
    }, 5000);
    setLoading(false);
  };

  return (
    <Formik
      initialValues={{
        id: Math.floor(Math.random() * 1000) + 1,
        profileImage: image?.uri,
        fName: '',
        lName: '',
        email: '',
        password: '',
        checked: '',
        phone: '',
        dob: '',
      }}
      onSubmit={values => dispatchUser(values)}
      validationSchema={signUpValidationSchema}>
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
            <Image source={image1} style={styles.ovalShapeView} />

            <VectorIcon
              name="chevron-back"
              type={'Ionicons'}
              size={30}
              color={AppStyles.colorSet.white}
              style={styles.backButton}
              onPress={onGoBack}
            />

            <Text style={styles.createAccountText}>Create Account</Text>

            <TouchableOpacity onPress={handleModal}>
              <Image source={image ?? uploadImage} style={styles.uploadImage} />
            </TouchableOpacity>
            <InputComponent
              placeholder="First Name"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values?.fName}
              onChangeText={handleChange('fName')}
              onBlur={() => setFieldTouched('fName')}
              inputStyle={styles.textInputName}
              errorText={styles.errorSignupText}
              touched={touched?.fName}
              errors={errors?.fName}
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <InputComponent
              placeholder="Last Name"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values?.lName}
              onChangeText={handleChange('lName')}
              onBlur={() => setFieldTouched('lName')}
              inputStyle={styles.textInputName}
              errorText={styles.errorSignupText}
              touched={touched?.lName}
              errors={errors?.lName}
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <InputComponent
              placeholder="Email"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values?.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              inputStyle={styles.textInputName}
              touched={touched?.email}
              errors={errors?.email}
              errorText={styles.errorSignupText}
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <InputComponent
              placeholder="Password"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              inputStyle={styles.textInputName}
              secureTextEntry={true}
              touched={touched?.password}
              errors={errors?.password}
              errorText={styles.errorSignupText}
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <View style={styles.radioContainer}>
              <View>
                <RadioButton
                  value={checked}
                  status={checked === 'Male' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Male')}
                />
                <Text style={styles.genderText}>Male</Text>
              </View>
              <View>
                <RadioButton
                  value={checked}
                  status={checked === 'Female' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Female')}
                />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </View>
            {touched?.checked && errors?.checked && (
              <Text style={styles.errorSignupText}>{errors?.checked}</Text>
            )}

            <MaskInput
              value={values?.phone}
              style={styles.textInputName}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
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
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1900"
              maxDate="01-01-2000"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
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
                  color: 'white',
                },
                dateText: {
                  fontSize: 17,
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
                <TouchableOpacity onPress={captureImage}>
                  <Text style={styles.cameraOption}>Take Photo...</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={galleryImage}>
                  <Text style={styles.cameraOption}>
                    Choose from Library...
                  </Text>
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
              Don't hava an account ?
            </Text>
            <TouchableOpacity>
              <Text style={styles.signinButton}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignupScreen;
