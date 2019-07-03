import { LOGIN, LOGOUT } from '../types';

const loginAction = payload => ({
  type: LOGIN,
  payload,
});

const logoutAction = () => ({
  type: LOGOUT,
});

export const login = user => dispatch => {
  dispatch(loginAction(user));
};

export const logout = () => dispatch => {
  dispatch(logoutAction());
};
