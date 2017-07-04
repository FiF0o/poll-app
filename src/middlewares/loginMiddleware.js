/**
 * Created by jonlazarini on 09/06/17.
 */
import { ATTEMPT_LOGIN, ATTEMPT_ADD_USER } from '../actionTypes';
import {signedIn, signedOut} from '../actions/auth';
import {auth, database} from '../database/firebase';
import pick from 'lodash/pick';

const usersRef = database.ref('users');

export const loginMiddleware = store => next => action => {
    let result = next(action);
    const { type } = action;

    // when logging in
    if (type === ATTEMPT_LOGIN ) {
        try
        {
            console.log('LOGGING IN...');
            //TODO Probably best to avoid listeners/cb as it will fire events/actions when users are added or check whether user already exists
            auth.onAuthStateChanged((user) => {
                // for some reasons before this request, a uid token with null properties gets returned
                //TODO ??? chainable then? https://firebase.google.com/docs/auth/web/google-signin
                if(user.email !== null) {
                    store.dispatch(signedIn(user));
                    let u = pick(user, ['displayName', 'photoURL', 'email', 'uid']);
                    // write user to the DB
                    usersRef.child(user.uid)
                        .set(u);
                    // fires next middleware to add the user in our Redux state
                    store.dispatch({type: ATTEMPT_ADD_USER}) // MW
                } else
                    store.dispatch(signedOut())
            })
            // debug
            // throw new Error(`:'(`);
        }
        catch (err)
        {
            console.error(err);
            //TODO error management
            // store.dispatch({type: HAS_ERRORED, err});
        }
    }

    return result;
};