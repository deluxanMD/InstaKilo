import {Text, View} from 'react-native';
import React from 'react';

import TextInputField from '../../components/TextInputField/TextInputField';
import styles from './styles';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>InstaKilo</Text>
      <View style={styles.loginForm}>
        <TextInputField placeholder="Username, email or mobile number" />
        <TextInputField placeholder="Password" />
        <CustomButton title="Log in" color="#4f5bd5" />
      </View>
      <CustomButton
        title="Create Account"
        variant="outlined"
        color="#4f5bd5"
        onPress={() => navigation.navigate('App')}
      />
    </View>
  );
};

export default LoginScreen;
