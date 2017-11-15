import {ATTEMPT_LOG_IN, LOG_IN} from '../constants';
// import {auth, googleAuthProvider } from '../database';

let userMock = {
  email: 'trompette@kikou.com',
  displayName: 'username 1',
  photoURL: 'https://placebear.com/100/100',
  uid: 'user1'
};

export const signIn = () =>
  (dispatch) => {
    dispatch({type: ATTEMPT_LOG_IN});
    dispatch(signedIn(userMock));
  };

export const signedIn = ({user, email, displayName, photoURL, uid}) => ({
  type: LOG_IN,
  email,
  displayName,
  photoURL,
  uid
});
