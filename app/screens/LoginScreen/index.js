import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import image1 from '../../../assets/Images/Ellipse1.png';
import image2 from '../../../assets/Images/Ellipse2.png';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={image1} style={styles.ovalShapeViewOrange} />
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Image source={image2} style={styles.ovalShapeViewGreen} />
      </View>

      <View style={styles.textInputContainer}>
        <InputComponent
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          containerStyle={styles.textInputContainer}
          inputStyle={styles.inputStyle}
        />
        <InputComponent
          placeholder="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          containerStyle={styles.textInputContainer}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.forgetButton}>
        <Text style={styles.forgetText}>Forget Password ?</Text>
      </TouchableOpacity>

      <ButtonComponent
        title="SIGN IN"
        buttonStyleWrapper={styles.buttonSignin}
        buttonText={styles.buttonText}
        iconType="Entypo"
        iconName="facebook"
        iconSize={24}
      />

    </View>
  );
};
export default LoginScreen;
