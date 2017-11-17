import {auth, googleAuthProvider} from '../database/firebase';

export const signinWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
