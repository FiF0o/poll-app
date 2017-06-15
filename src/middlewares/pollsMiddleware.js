/**
 * Created by jonlazarini on 15/06/17.
 */
import { ATTEMPT_ADD_POLL } from '../actionTypes';
import { addPoll } from '../actions/polls';
import { database } from '../database/firebase';

const pollsRef = database.ref('polls');

export const pollsMiddleware = store => next => action => {
    let result = next(action);
    const { type } = action;

    // when logging in we write to the user to DB
    if (type === ATTEMPT_ADD_POLL ) {
        try
        {
            console.log('ADDING POLL...');
            pollsRef.on('child_added', (snapshot) => {
                store.dispatch(addPoll(snapshot.val()));
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