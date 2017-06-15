/**
 * Created by jonlazarini on 15/06/17.
 */
import { ATTEMPT_ADD_USER } from '../actionTypes';
import { addUser } from '../actions/users';
import { database } from '../database/firebase';

const usersRef = database.ref('users');

export const userMiddleware = store => next => action => {
    let result = next(action);
    const { type } = action;

    // when logging in we write to the user to DB
    if (type === ATTEMPT_ADD_USER ) {
        try
        {
            console.log('ADDING USER...');
            usersRef.on('child_added', (snapshot) => {
                store.dispatch(addUser(snapshot.val()));
            });
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