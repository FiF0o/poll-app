import firebase from './firebase';

const usersRef = firebase.database().ref('/users')

export const writeUser = ({email, displayName, photoURL, uid}) =>
  usersRef.child(uid).set({
    email,
    displayName,
    photoURL,
    uid,
    timeStamp: Date.now()
  });
