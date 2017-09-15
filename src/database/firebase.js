/**
 * Created by jonlazarini on 24/04/17.
 */
require('dotenv').config();
 import firebase from 'firebase';
// TODO 
// import { tokens } from '../config/tokens';

// Initialize Firebase
const config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
};

firebase.initializeApp(config);

export default firebase;

// gets an instance of the database
export const database = firebase.database()

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const anonymousAuthProvider = new firebase.auth().signInAnonymously()
export const messaging = firebase.messaging();
