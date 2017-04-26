/**
 * Created by jonlazarini on 24/04/17.
 */
import firebase from 'firebase';
import { tokens } from '../config/tokens';

// Initialize Firebase
const config = {
    apiKey: tokens.apiKey,
    authDomain: tokens.authDomain,
    databaseURL: tokens.databaseURL,
    projectId: tokens.projectId,
    storageBucket: tokens.storageBucket,
    messagingSenderId: tokens.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;

// gets an instance of the database
export const database = firebase.database()

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const anonymousAuthProvider = new firebase.auth().signInAnonymously()
