import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import uuid from 'react-native-uuid';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {AppStyles, Images} from '../../themes';
import styles from './styles';
import VectorIcon from '../../components/VectorIcon';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {ForgotPasswordSchema} from '../../Schema/ForgotPasswordSchema';
import {recoverPassword} from '../../redux/Actions/AuthActions';
import {AUTH_SCREENS} from '../../constants/screen';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const usersState = useSelector(state => state?.users);
  const users = usersState?.users;
  const dispatch = useDispatch();

  const initialValues = {email: ''};
  const key = uuid.v4();

  const handleBackButton = () => {
    navigation.goBack();
  };

  const showLoading = values => {
    setLoading(true);
    _.delay(async () => await emailVerify(values), 3000);
  };

  const emailVerify = values => {
    users?.map(user => {
      if (user.email === values?.email) {
        dispatch(recoverPassword(user?.email, key));
        setLoading(false);
        navigation.navigate(AUTH_SCREENS.RESETPASSWORD, {
          password: user?.password,
          email: user?.email,
        });
      }
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => showLoading(values)}
      validationSchema={ForgotPasswordSchema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.mainContainer}>
          <KeyboardAwareScrollView style={styles.keyboardAwareScrollView}>
            <View style={styles.headerContainer}>
              <VectorIcon
                name={'arrow-back'}
                type={'Ionicons'}
                size={34}
                color={AppStyles.colorSet.black}
                onPress={handleBackButton}
              />
              <Text style={styles.forgetPassword}>FORGOT PASSWORD</Text>
            </View>

            <View style={styles.bodyContainer}>
              <Image
                source={Images.forgotPassword}
                style={styles.forgotPasswordImage}
              />

              <Text style={styles.description}>
                Confirm your email and we'll send you code
              </Text>

              <InputComponent
                value={values?.email}
                placeholder="Type Your Email"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                inputStyle={styles.inputStyle}
                placeholderTextColor={AppStyles.colorSet.silver}
                touched={touched?.email}
                errors={errors?.email}
                errorText={styles.errorText}
              />

              <ButtonComponent
                title="Send"
                buttonStyleWrapper={styles.buttonSendEmail}
                buttonText={styles.buttonText}
                loading={loading}
                onPress={handleSubmit}
              />
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default ForgetPassword;
