import {/*ATTEMPT_LOG_IN, HAS_ERRORED,*/ LOG_IN, USER_LOGGED} from '../constants'
import {initialState} from '../initialState'

const auth = (state=initialState.auth, action) => {
  const {type, email, displayName, photoURL, uid} = action;
  switch(type) {
    case LOG_IN:
      return {
        status: USER_LOGGED,
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