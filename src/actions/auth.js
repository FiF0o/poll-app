import {ATTEMPT_LOGIN, LOG_IN, HAS_ERRORED, LOGGED_OUT} from '../constants';
import {signinWithGoogle} from '../utils/signinWithGoogle';

const signInError = (error) => ({
  type: HAS_ERRORED,
  errorMessage: error
});

export const signIn = () =>
  (dispatch) => {
    dispatch({type: ATTEMPT_LOGIN});
    signinWithGoogle()
      .then((result) => {
        // const user = result.user
        console.log('user', result)
      })
      .catch((error) => dispatch(signInError(error.message)));
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