import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {AppStyles, Images} from '../../themes';
import styles from './styles';
import VectorIcon from '../../components/VectorIcon';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {ResetPasswordSchema} from '../../Schema/ForgotPasswordSchema';
import {AUTH_SCREENS} from '../../constants/screen';

const ResetPassword = props => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const usersState = useSelector(state => state?.users);
  const recoverPasswordEmail = usersState?.recoveries;
  const data = props?.route?.params;

  console.log(usersState?.recoveries);
  const initialValues = {code: ''};

  const handleBackButton = () => {
    navigation.goBack();
  };

  const showLoading = values => {
    setLoading(true);
    _.delay(async () => await checkCode(values), 3000);
  };

  const checkCode = values => {
    if (recoverPasswordEmail?.key === values?.code) {
      setLoading(false);
      Alert?.alert('Your password is this:', data?.password);
      navigation.navigate(AUTH_SCREENS.LOGIN);
    }
    Alert.alert('Code not match', recoverPasswordEmail?.key);
    navigation.navigate(AUTH_SCREENS.LOGIN);
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
