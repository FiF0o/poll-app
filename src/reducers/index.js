import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import isLoading from './isLoading';

const reducers = combineReducers({
  auth,
  errors,
  isLoading
});

export default reducers;
