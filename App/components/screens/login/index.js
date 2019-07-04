import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';
import logo from '../../../../assets/icon.png';
import { Screens } from '../../../constants';
import { Button, TextField, HR, VR } from '../../custom';

const LogoView = () => (
  <View style={styles.logoView}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.heading}>Instan</Text>
  </View>
);

const Form = () => {
  return (
    <View style={styles.form}>
      <TextField placeholder="email address" />
      <HR />
      <TextField placeholder="password" secureTextEntry />
      <Button title="Sign in" />
    </View>
  );
};

const Footer = ({ navigation: { navigate } }) => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.footerItem}>
      <Text style={styles.footerText}>Forgot Password?</Text>
    </TouchableOpacity>
    <VR />
    <TouchableOpacity
      style={styles.footerItem}
      onPress={() => navigate(Screens.register)}
    >
      <Text style={[styles.footerText, styles.underline]}>
        Create an Account
      </Text>
    </TouchableOpacity>
  </View>
);

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <LogoView />
      <Form navigation={navigation} />
      <Footer navigation={navigation} />
    </SafeAreaView>
  </View>
);

export default LoginScreen;
