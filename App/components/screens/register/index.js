import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../styles';
import thumb from '../../../../assets/user-placeholder.png';
import { Screens } from '../../../constants';
import { Button, TextField, HR, VR } from '../../custom';

const PhotoView = () => (
  <TouchableOpacity style={styles.photoView}>
    <Image style={styles.photo} source={thumb} tintColor="#FFF" />
  </TouchableOpacity>
);

const Form = () => {
  return (
    <View style={styles.form}>
      <TextField placeholder="full name" />
      <HR />
      <TextField placeholder="email address" />
      <HR />
      <TextField placeholder="password" secureTextEntry />
      <Button title="Register" />
    </View>
  );
};

const Footer = ({ navigation: { navigate } }) => (
  <View style={styles.footer}>
    <Button
      style={styles.footerItem}
      title="Cancel"
      onPress={() => navigate(Screens.login)}
    />
  </View>
);

const RegisterScreen = ({ navigation }) => (
  <View style={styles.container}>
    <PhotoView />
    <Form navigation={navigation} />
    <Footer navigation={navigation} />
  </View>
);

export default RegisterScreen;
