import { SET_LOADING, LOGIN, LOGOUT } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
