import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';

import styles from './styles';
import image1 from '../../../assets/Images/Ellipse1.png';
import image2 from '../../../assets/Images/Ellipse2.png';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {AUTH_SCREENS} from '../../constants/screen';
import {AppStyles} from '../../themes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = () => {
  const navigation = useNavigation();

  const onSignUp = () => {
    navigation.navigate(AUTH_SCREENS.SIGNUP);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup?.object()?.shape({
        email: yup?.string()?.email()?.required(),
        password: yup
          ?.string()
          ?.min(4)
          ?.max(10, 'Password should not exceed 10 chars.')
          ?.required(),
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
          <KeyboardAwareScrollView>
            <View style={styles.imageContainer}>
              <Image source={image1} style={styles.ovalShapeViewOrange} />
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Image source={image2} style={styles.ovalShapeViewGreen} />
            </View>

            <InputComponent
              placeholder="Email"
              placeholderTextColor={AppStyles.colorSet.silver}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              containerStyle={styles.textInputContainer}
              inputStyle={styles.inputStyle}
            />
            {touched?.email && errors?.email && (
              <Text style={styles.errorText}>{errors?.email}</Text>
            )}

            <InputComponent
              placeholder="Password"
              placeholderTextColor={AppStyles.colorSet.silver}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              containerStyle={styles.textInputContainer}
              inputStyle={styles.inputStyle}
              secureTextEntry={true}
            />
            {touched?.password && errors?.password && (
              <Text style={styles.errorText}>{errors?.password}</Text>
            )}

            <TouchableOpacity style={styles.forgetButton}>
              <Text style={styles.forgetText}>Forget Password ?</Text>
            </TouchableOpacity>

            <ButtonComponent
              title="SIGN IN"
              buttonStyleWrapper={styles.buttonSignin}
              buttonText={styles.buttonText}
              onPress={handleSubmit}
            />
          </KeyboardAwareScrollView>

          <View style={styles.handleText}>
            <Text style={styles.haveAnAccountText}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.signupButton}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default LoginScreen;
