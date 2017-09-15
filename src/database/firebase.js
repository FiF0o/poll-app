/**
 * Created by jonlazarini on 24/04/17.
 */
require('dotenv').config();
import firebase from 'firebase';
// import { tokens } from '../config/tokens';
let tokens;
if(process.env.NODE_ENV === 'development') {
    // console.log(process.env.NODE_ENV)
    tokens = require('../config/tokens').tokens
}
// otherwise is in production and use env variables

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
