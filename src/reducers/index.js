import { combineReducers } from 'redux';
import auth from './auth';
import errorMessage from './errorMessage';
import isLoading from './isLoading';

const reducers = combineReducers({
  auth,
  errorMessage,
  isLoading
});

export default reducers;
