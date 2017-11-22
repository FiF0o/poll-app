import firebase from 'firebase';
require('dotenv').config();

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const AnonymousAuthProvider = new firebase.auth().signInAnonymously();

// TODO WTF? why is it making the app crash?
if(process.env.NODE_ENV !== 'test') module.messaging = firebase.messaging();