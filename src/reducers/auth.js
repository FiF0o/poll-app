import {ATTEMPT_LOGIN, LOG_IN, USER_LOGGED, LOGGED_OUT} from '../constants'
import {initialState} from '../initialState'

const auth = (state=initialState.auth, action) => {
  const {type, email, displayName, photoURL, uid} = action;
  switch(type) {
    case ATTEMPT_LOGIN:
      return {
        isLoading: true
      }
    case LOG_IN:
      return {
        status: USER_LOGGED,
        email,
        displayName,
        photoURL,
        uid
      };
    case LOGGED_OUT:
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    default:
      return state;
  }   
};

export default auth;