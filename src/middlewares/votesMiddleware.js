/**
 * Created by jonlazarini on 15/06/17.
 */
import { ADDING_VOTE } from '../actionTypes';
// import { addVote } from '../actions/votes';
// import { database } from '../database/firebase';

// const votesRef = database.ref('votes');

export const votesMiddleware = store => next => action => {
    let result = next(action);
    const { type } = action;

    // when logging in we write to the user to DB
    switch (type){
        case ADDING_VOTE:
            try
            {
                console.log('ADDING VOTE...');
                // votesRef.on('child_added', (snapshot) => {
                    // gives key from DB as poll key prop, timestamp sucks :/
                    // store.dispatch(addVote(snapshot.key, snapshot.val()));
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
            return null;
    }
    return result;
};
