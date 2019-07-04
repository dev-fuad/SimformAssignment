import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';

import styles from '../styles';
import thumb from '../../../../assets/user-placeholder.png';
import { Screens } from '../../../constants';
import { Button, TextField, HR, VR } from '../../custom';
import { useForm } from '../../../utilities/CustomHooks';
import { login } from '../../../store/actions';

const getPermissionsAsync = async () => {
  if (Platform.OS === 'ios') {
    const { status: statusGallery } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const { status: statusCamera } = await Permissions.askAsync(
      Permissions.CAMERA
    );
    if (statusGallery !== 'granted' || statusCamera !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    }
  }
};

const _clickImage = async setImage => {
  let result = await launchCameraAsync({
    allowsEditing: true,
    aspect: [1, 1],
    base64: true,
  });

  let image = null;

  if (!result.cancelled) {
    image = { uri: result.uri };
  }
  setImage(image);
};

const _pickImage = async setImage => {
  let result = await launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [1, 1],
    base64: true,
  });

  let image = null;

  if (!result.cancelled) {
    // image = { uri: `data:image/jpeg;base64,${result.base64}` };
    image = { uri: result.uri };
  }
  setImage(image);
};

const _getImage = setImage => {
  Alert.alert(
    'Get Image From',
    '',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Camera', onPress: () => _clickImage(setImage) },
      { text: 'Gallery', onPress: () => _pickImage(setImage) },
    ],
    { cancelable: false }
  );
};

const PhotoView = ({ form: [values, setValue] }) => (
  <TouchableOpacity
    style={styles.photoView}
    onPress={() => _getImage(setValue('image'))}
  >
    <Image
      style={styles.photo}
      source={values.image || thumb}
      resizeMode="cover"
    />
  </TouchableOpacity>
);

const Form = ({ form: [values, setValue], onSubmit }) => {
  return (
    <View style={styles.form}>
      <TextField
        placeholder="full name"
        value={values.name}
        onChangeText={setValue('name')}
        autoCapitalize="words"
      />
      <HR />
      <TextField
        placeholder="email address"
        value={values.email}
        onChangeText={setValue('email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <HR />
      <TextField
        placeholder="password"
        value={values.password}
        onChangeText={setValue('password')}
        secureTextEntry
      />
      <Button title="Register" onPress={onSubmit} />
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

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const form = useForm({
    image: null,
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    getPermissionsAsync();
  }, []);

  useEffect(() => {
    if (user.email) {
      navigation.navigate(Screens.home);
    }
  }, [user]);

  const onSubmit = () => {
    const { image, name, email, password } = form[0];
    if (!image) {
      Alert.alert('Please upload an image');
      return;
    }
    if (!name) {
      Alert.alert('Please enter your full name');
      return;
    }
    if (!email) {
      Alert.alert('Please enter your email address');
      return;
    }
    if (!password) {
      Alert.alert('Please enter your password');
      return;
    }
    dispatch(
      login({
        image,
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      })
    );
  };

  return (
    <View style={styles.container}>
      <PhotoView form={form} />
      <Form form={form} onSubmit={onSubmit} />
      <Footer navigation={navigation} />
    </View>
  );
};

export default RegisterScreen;
