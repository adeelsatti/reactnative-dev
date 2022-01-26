import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
import Toast from 'react-native-toast-message';

import styles from './styles';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {AUTH_SCREENS} from '../../constants/screen';
import {AppStyles, Images} from '../../themes';
import {loginValidationSchema} from '../../Schema/LoginSchema';
import {
  is_Login,
  is_Support,
  resetError,
} from '../../redux/Actions/AuthActions';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loginAttempts, setLoginAttempts] = useState(4);
  const [loading, setLoading] = useState(false);

  const userData = useSelector(state => state?.users);
  const users = userData?.users;
  const dispatch = useDispatch();

  console.log(users);
  const onSignUp = () => {
    navigation.navigate(AUTH_SCREENS.SIGNUP);
  };

  const LoginUser = values => {
    users?.map(user => {
      if (
        user?.email === values?.email &&
        user?.password === values?.password
      ) {
        Toast.show({
          type: 'success',
          text1: 'Successfully Login',
          text2: 'You can access you account',
        });

        dispatch(is_Login(true));
        setLoading(false);
      }
    });

    Toast.show({
      type: 'error',
      text1: 'Login Faild',
      text2: 'Enter correct email or password',
    });
    setLoginAttempts(attempt => attempt - 1);
    setLoading(false);
  };

  useEffect(() => {
    if (!loginAttempts) {
      dispatch(is_Support(true));
      setLoading(false);
    }
    dispatch(resetError());
  }, []);

  const checkAccount = values => {
    setLoading(true);
    _.delay(async () => await LoginUser(values), 1000);
  };

  const onForgetPassword = () => {
    navigation.navigate(AUTH_SCREENS.FORGETPASSWORD);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => checkAccount(values)}
      validationSchema={loginValidationSchema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.mainContainer}>
          <KeyboardAwareScrollView>
            <View style={styles.imageContainer}>
              <Image
                source={Images.ellipseImage1}
                style={styles.ovalShapeViewOrange}
              />
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Image
                source={Images.ellipseImage2}
                style={styles.ovalShapeViewGreen}
              />
            </View>

            <InputComponent
              placeholder="Email"
              autoFocus={true}
              placeholderTextColor={AppStyles.colorSet.silver}
              value={values?.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              containerStyle={styles.textInputContainer}
              inputStyle={styles.inputStyle}
              touched={touched?.email}
              errors={errors?.email}
              errorText={styles.errorText}
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <InputComponent
              placeholder="Password"
              placeholderTextColor={AppStyles.colorSet.silver}
              value={values?.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              containerStyle={styles.textInputContainer}
              inputStyle={styles.inputStyle}
              secureTextEntry={true}
              touched={touched?.password}
              errors={errors?.password}
              errorText={styles.errorText}
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <TouchableOpacity
              style={styles.forgetButton}
              onPress={onForgetPassword}>
              <Text style={styles.forgetText}>Forget Password ?</Text>
            </TouchableOpacity>

            <ButtonComponent
              title="SIGN IN"
              buttonStyleWrapper={styles.buttonSignin}
              buttonText={styles.buttonText}
              loading={loading}
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
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default LoginScreen;
