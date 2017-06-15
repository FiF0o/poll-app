/**
 * Created by jonlazarini on 09/06/17.
 */
import { HAS_ERRORED, ATTEMPT_LOGIN } from '../actionTypes';
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
            auth.onAuthStateChanged((user) => {
                if(user) {
                    store.dispatch(signedIn(user));
                    let u = pick(user, ['displayName', 'photoURL', 'email', 'uid']);
                    // write user to the DB
                    usersRef.child(user.uid)
                        .set(u);
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