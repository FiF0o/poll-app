import {ATTEMPT_LOGIN, LOG_IN, USER_LOGGED} from '../constants'
import {initialState} from '../initialState'

const auth = (state=initialState.auth, action) => {
  const {type, email, displayName, photoURL, uid, isLoading} = action;
  switch(type) {
    case ATTEMPT_LOGIN:
      return {
        isLoading
      }
    case LOG_IN:
      return {
        status: USER_LOGGED,
        type,
        email,
        displayName,
        photoURL,
        uid
      };
    default:
      return state;
  }   
};

export default auth;