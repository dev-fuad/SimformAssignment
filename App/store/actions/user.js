import { AsyncStorage } from 'react-native';
import { LOGIN, LOGOUT } from '../types';

const loginAction = payload => ({
  type: LOGIN,
  payload,
});

const logoutAction = () => ({
  type: LOGOUT,
});

export const tryLogin = () => async dispatch => {
  try {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      dispatch(loginAction(JSON.parse(user)));
    }
  } catch (error) {
    console.log('Error: ', error, ' while fetching user');
  }
};

export const login = user => async dispatch => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    dispatch(loginAction(user));
  } catch (error) {
    console.log('Error: ', error, ' while saving user: ', user);
  }
};

export const logout = () => async dispatch => {
  await AsyncStorage.clear();
  dispatch(logoutAction());
};
