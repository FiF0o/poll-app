/**
 * Created by jonlazarini on 24/04/17.
 */
import firebase from 'firebase';
require('dotenv').config();
// import { tokens } from '../config/tokens';
let tokens;
if(process.env.NODE_ENV === 'development') {
    tokens = require('../config/tokens').tokens
}
// otherwise is in production and use env variables

// Initialize Firebase
console.log('process.env', process.env)
const config = {
    apiKey: process.env.REACT_APP_APIKEY || tokens.apiKey,
    authDomain: process.env.REACT_APP_AUTHDOMAIN || tokens.authDomain,
    databaseURL: process.env.REACT_APP_DATABASEURL || tokens.databaseURL,
    projectId: process.env.REACT_APP_PROJECTID || tokens.projectId,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET || tokens.storageBucket,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID || tokens.messagingSenderId
};
console.log('config', config)

firebase.initializeApp(config);

export default firebase;

// gets an instance of the database
export const database = firebase.database()

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const anonymousAuthProvider = new firebase.auth().signInAnonymously()
export const messaging = firebase.messaging();
