/**
 * Created by jonlazarini on 24/04/17.
 */
import firebase from 'firebase';
import { tokens } from '../config/tokens';

// Initialize Firebase
const config = {
    apiKey: process.env.APIKEY || tokens.apiKey,
    authDomain: process.env.AUTHDOMAIN || tokens.authDomain,
    databaseURL: process.env.DATABASEURL || tokens.databaseURL,
    projectId: process.env.PROJECTID || tokens.projectId,
    storageBucket: process.env.STORAGEBUCKET || tokens.storageBucket,
    messagingSenderId: process.env.MESSAGINGSENDERID || tokens.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;

// gets an instance of the database
export const database = firebase.database()

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const anonymousAuthProvider = new firebase.auth().signInAnonymously()
export const messaging = firebase.messaging();
