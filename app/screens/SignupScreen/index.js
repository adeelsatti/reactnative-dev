import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ImageCropPicker from 'react-native-image-crop-picker';
import MaskInput from 'react-native-mask-input/src/MaskInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import DatePicker from 'react-native-datepicker';

import styles from './styles';
import image1 from '../../../assets/Images/Ellipse1.png';
import uploadImage from '../../../assets/Images/uploadImage.png';
import VectorIcon from '../../components/VectorIcon';
import {AppStyles} from '../../themes';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [checked, setChecked] = useState();

  const captureImage = async () => {
    const img = await ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    setImage({uri: img?.path});
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        phone: '',
        dob: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup?.object()?.shape({
        name: yup?.string()?.min(5)?.required('Please enter your name'),
        email: yup?.string()?.email()?.required(),
        password: yup
          ?.string()
          ?.min(4)
          ?.max(10, 'Password should not exceed 10 chars.')
          ?.required(),
        phone: yup?.string()?.min(11)?.required(),
        dob: yup?.string()?.required(),
      })}>
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

            <TouchableOpacity onPress={captureImage}>
              <Image source={image ?? uploadImage} style={styles.uploadImage} />
            </TouchableOpacity>
            <InputComponent
              placeholder="Name"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values?.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              inputStyle={styles.textInputName}
            />
            {touched?.name && errors?.name && (
              <Text style={styles.errorSignupText}>{errors?.name}</Text>
            )}

            <InputComponent
              placeholder="Email"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              inputStyle={styles.textInputName}
            />
            {touched?.email && errors?.email && (
              <Text style={styles.errorSignupText}>{errors?.email}</Text>
            )}

            <InputComponent
              placeholder="Password"
              placeholderTextColor={AppStyles.colorSet.white}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              inputStyle={styles.textInputName}
              secureTextEntry={true}
            />
            {touched?.password && errors?.password && (
              <Text style={styles.errorSignupText}>{errors?.password}</Text>
            )}

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

            <MaskInput
              value={values.phone}
              style={styles.textInputName}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
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
              date={values.dob}
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

            <ButtonComponent
              title="SIGN UP"
              buttonStyleWrapper={styles.buttonSignup}
              buttonText={styles.buttonSignupText}
              onPress={handleSubmit}
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
