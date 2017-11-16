import {ATTEMPT_LOGIN, LOG_IN, HAS_ERRORED} from '../constants';
// import {auth, googleAuthProvider } from '../database';

let userMock = {
  email: 'trompette@kikou.com',
  displayName: 'username 1',
  photoURL: 'https://placebear.com/100/100',
  uid: 'user1'
};

const signInError = (error) => ({
  type: HAS_ERRORED,
  errorMessage: error
});

export const signIn = () =>
  (dispatch) => {
    dispatch({type: ATTEMPT_LOGIN});
    // dispatch(signInError('pwned!!!!!!!!!'));
    dispatch(signedIn(userMock));
  };

export const signedIn = ({user, email, displayName, photoURL, uid}) => ({
  type: LOG_IN,
  email,
  displayName,
  photoURL,
  uid
});
