import {ATTEMPT_LOGIN, LOG_IN, HAS_ERRORED, CLEAR_ERROR, LOGGED_OUT} from '../constants';
import {signinWithGoogle} from '../utils/signinWithGoogle';

const signInError = (errorMessage) => ({
  type: HAS_ERRORED,
  errorMessage
});

export const signIn = () =>
  (dispatch) => {
    dispatch({type: CLEAR_ERROR});
    dispatch({type: ATTEMPT_LOGIN});
    signinWithGoogle()
      .then((result) => {
        const {user} = result;
        if(user) {
          dispatch(signedIn({...user}));
        }
      })
      .catch((error) => {
        dispatch(signInError(error.message));
      });
  };

export const signedIn = ({email, displayName, photoURL, uid}) => ({
  type: LOG_IN,
  email,
  displayName,
  photoURL,
  uid
});

export const signOut = () => {
  return(dispatch) => {
      dispatch(signedOut());
  }
};

export const signedOut = () => {
  return {
    type: LOGGED_OUT
  }
};