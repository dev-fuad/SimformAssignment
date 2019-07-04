import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles';
import logo from '../../../../assets/icon.png';
import { Screens } from '../../../constants';
import { Button, TextField, HR, VR } from '../../custom';
import { login, tryLogin } from '../../../store/actions';
import { useForm } from '../../../utilities/CustomHooks';

const LogoView = () => (
  <View style={styles.logoView}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.heading}>Instan</Text>
  </View>
);

const onSubmit = (email, password) => {};

const Form = ({ onSubmit }) => {
  const [{ email, password }, setValue] = useForm({
    email: '',
    password: '',
  });
  return (
    <View style={styles.form}>
      <TextField
        placeholder="email address"
        value={email}
        onChangeText={setValue('email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <HR />
      <TextField
        placeholder="password"
        value={password}
        onChangeText={setValue('password')}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => onSubmit({ email, password })} />
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

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const onSubmit = ({ email, password }) => {
    if (!email) {
      Alert.alert('Please enter your email address');
      return;
    }
    if (!password) {
      Alert.alert('Please enter your password');
      return;
    }
    if (email.trim() === 'admin@gmail.com' && password.trim() === '123456') {
      dispatch(login({ email, password }));
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  useEffect(() => {
    dispatch(tryLogin());
  }, []);

  useEffect(() => {
    if (user.email) {
      navigation.navigate(Screens.home);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LogoView />
        <Form onSubmit={onSubmit} />
        <Footer navigation={navigation} />
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
