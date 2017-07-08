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
    switch (type){
        case ATTEMPT_ADD_POLL:
            try
            {
                console.log('ADDING POLL...');
                // pollsRef.on('child_added', (snapshot) => {
                //     // gives key from DB as poll key prop, timestamp sucks :/
                //     store.dispatch(addPoll({...snapshot.val(), id: snapshot.key}));
                // });
                // pollsRef.on('child_changed', (snapshot) => {
                //     store.dispatch(addPoll({...snapshot.val(), id: snapshot.key}));
                // });
                // debug
                // throw new Error(`:'(`);
            }
            catch (err)
            {
                console.error(err);
                //TODO error management
                // store.dispatch({type: HAS_ERRORED, err});
            }
            break;
        default:
            return;
    }
    return result;
};
