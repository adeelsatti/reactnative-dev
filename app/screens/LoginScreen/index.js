import React, {useEffect, useRef, useState} from 'react';
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
import {block_User, is_Login} from '../../redux/Actions/AuthActions';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(true);
  const inputRef = useRef(0);
  const bodyRef = useRef(0);

  const userData = useSelector(state => state?.users);
  const users = userData?.users;
  const blockEmail = useSelector(state => state?.users?.block_User);
  const dispatch = useDispatch();

  const onSignUp = () => {
    navigation.navigate(AUTH_SCREENS.SIGNUP);
  };

  const blockUserEmail = inputEmail => {
    Toast?.show({
      type: 'error',
      text1: 'Email Blocked',
      text2: 'Your Email is blocked by System',
    });
    dispatch(block_User({email: inputEmail, block: true}));
    setLoginAttempts(0);
  };
  const LoginUser = values => {
    const {email} = values;
    const inputEmail = email.toLowerCase();
    for (const blockMail of blockEmail) {
      if (blockMail?.email === inputEmail) {
        return (
          Toast?.show({
            type: 'error',
            text1: 'Already Blocked',
            text2: 'Email already blocked by System',
          }),
          setLoginAttempts(0)
        );
      } else {
        for (const user of users) {
          if (
            user?.mail === inputEmail &&
            user?.password === values?.password
          ) {
            return (
              setCheck(false),
              Toast.show({
                type: 'success',
                text1: 'Successfully Login',
                text2: 'You can access you account',
              }),
              dispatch(is_Login(true))
            );
          }
        }

        if (check) {
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: 'Enter correct email or password',
          });
        }
        setLoginAttempts(attempt => attempt + 1);
        setLoading(false);

        if (loginAttempts > 4) {
          blockUserEmail(inputEmail);
        }
      }
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const focus = input => {
    input.current?.focus();
  };

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
              ref={inputRef}
              onSubmitEditing={() => focus(bodyRef)}
              returnKeyLabel="next"
              blurOnSubmit={false}
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
              onSubmitEditing={handleSubmit}
              ref={bodyRef}
              returnKeyType="done"
              returnKeyLabel="done"
              onKeyPress={handleSubmit}
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
