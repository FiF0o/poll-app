import firebase, {auth} from './database/firebase';
import {writeUser} from './database/writeUser';

const usersRef = firebase.database().ref('/users')

export const usersListeners = (firebaseAuth = auth, writeUserToDB = writeUser) => (dispatch) =>
  firebaseAuth.onAuthStateChanged((snap) => {
    if(snap.email) {
      writeUserToDB({...snap}, usersRef);
      //TODO Broadcast new data from DB to other users
    }
  });
  //TODO catch database errors