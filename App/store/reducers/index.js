import { combineReducers } from 'redux';
import user from './user';
import videos from './videos';

export default combineReducers({
  user,
  videos,
});
