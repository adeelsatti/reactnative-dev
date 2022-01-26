import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import _ from 'lodash';

import {AppStyles, Images} from '../../themes';
import styles from './styles';
import VectorIcon from '../../components/VectorIcon';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {ResetPasswordSchema} from '../../Schema/ResetPasswordSchema';
import {AUTH_SCREENS} from '../../constants/screen';

const ResetPassword = props => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const usersState = useSelector(state => state?.users);
  const recoverPasswordEmail = usersState?.recoveries;
  const users = usersState?.users;
  const data = props?.route?.params;

  const keys = Object.keys(recoverPasswordEmail);
  const val = Object.values(recoverPasswordEmail);
  const response = keys.map((email, i) => {
    return {email: email, code: val[i]};
  });

  const initialValues = {email: '', code: ''};

  const handleBackButton = () => {
    navigation.goBack();
  };

  const showLoading = values => {
    setLoading(true);
    _.delay(async () => await checkCode(values), 3000);
  };

  const checkCode = values => {
    response?.map(recovervalue => {
      if (
        recovervalue?.code === values?.code &&
        recovervalue?.email === values?.email
      ) {
        users?.map(user => {
          if (user?.email === values?.email) {
            Alert?.alert('Your Password is :', user?.password);
            setLoading(false);
            navigation.navigate(AUTH_SCREENS.LOGIN);
          }
        });
      }
    });
    //navigation.navigate(AUTH_SCREENS.LOGIN);
    setLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => showLoading(values)}
      validationSchema={ResetPasswordSchema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView style={styles.keyboardAwareScrollView}>
            <View style={styles.headerContainer}>
              <VectorIcon
                name={'arrow-back'}
                type={'Ionicons'}
                size={34}
                color={AppStyles.colorSet.black}
                onPress={handleBackButton}
              />
              <Text style={styles.forgetPassword}>RESET PASSWORD</Text>
            </View>

            <View style={styles.bodyContainer}>
              <Image
                source={Images.forgotPassword}
                style={styles.forgotPasswordImage}
              />

              <Text style={styles.description}>
                An email with a verification code {'\n'} was just sent to{' '}
                {data?.email}
              </Text>

              <InputComponent
                value={values?.email}
                placeholder="Enter email"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                inputStyle={styles.inputStyle}
                placeholderTextColor={AppStyles.colorSet.silver}
                touched={touched?.email}
                errors={errors?.email}
                errorText={styles.errorText}
              />

              <InputComponent
                value={values?.code}
                placeholder="Enter code"
                autoFocus={true}
                onChangeText={handleChange('code')}
                onBlur={() => setFieldTouched('code')}
                inputStyle={styles.inputStyle}
                placeholderTextColor={AppStyles.colorSet.silver}
                touched={touched?.code}
                errors={errors?.code}
                errorText={styles.errorText}
              />

              <ButtonComponent
                title="Done"
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

export default ResetPassword;
