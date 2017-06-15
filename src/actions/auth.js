/**
 * Created by jonlazarini on 21/05/17.
 */
// eslint-disable-next-line
import {SIGN_IN, SIGN_OUT, ATTEMPT_LOGIN} from '../actionTypes';
import {auth, googleAuthProvider } from '../database/firebase';

/*let userMock = {
    email: 'trompette@kikou.com',
    displayName: 'Marv Zgegouz',
    photoURL: 'http://placehold.it/150x150',
    uid: 'firstUser'
};*/

export const signIn = () => {
    return(dispatch) => {
        dispatch({type: ATTEMPT_LOGIN});
        // eslint-disable-next-line
        // dispatch(signedIn(userMock)); //data from firebase
        auth.signInWithPopup(googleAuthProvider)
    }
};

export const signedIn = (user) => {
    const { email, displayName, photoURL, uid } = user;
    return {
        type: SIGN_IN,
        email,
        displayName,
        photoURL,
        uid
    }
};

export const signOut = () => {
    return(dispatch) => {
        // dispatch({type: ATTEMPT_LOGIN});
        // eslint-disable-next-line
        dispatch(signedOut());
    }
};

export const signedOut = () => {
  return {
      type: SIGN_OUT
  }
};
