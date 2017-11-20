import {auth} from './database/firebase';
import {writeUser} from './database/controllers';

export const usersListeners = () => (dispatch) =>
  auth.onAuthStateChanged((snap) => {
    if(snap.email) {
      writeUser({...snap});
      //TODO Broadcast new data from DB to other users
    }
  });
  //TODO catch database errors