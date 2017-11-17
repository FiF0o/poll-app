import {auth} from './database/firebase';
import {signedIn} from './actions/auth';
import {writeUser} from './database/controllers';

export const usersListeners = () => (dispatch) =>
  auth.onAuthStateChanged((snap) => {
    if(snap) {
      dispatch(signedIn(snap));
      writeUser({...snap});
    }
  });
  //TODO catch database errors