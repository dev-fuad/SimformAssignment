import { SET_LOADING, LOGIN, LOGOUT } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};
