/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL, REMOVE_POLL, ATTEMPT_ADD_POLL} from '../actionTypes';
import {database} from '../database/firebase'

export const addPoll = ({name, description, uid, key}) => {
    return {
        type: ADD_POLL,
        name,
        description,
        uid,
        key,
        timeStamp: Date.now()
    }
};

export const removePoll = (key) => {
    return {
        type: REMOVE_POLL,
        key
    }
};

const pollsRef = database.ref('polls');
export const addPollToDb = (name, description, uid) => {
    return (dispatch) => {
        const payload = {
            name,
            description,
            uid,
        };
        pollsRef.push(payload)
            .then(() => {
                dispatch({type: ATTEMPT_ADD_POLL});
        })
    }
};

export const removePollFromDb = (key) => {
     return (dispatch) => {
         pollsRef.child(key).remove()
             .then(() => {
                 dispatch(removePoll(key))
                 // dispatch({type: ATTEMPT_REMOVE_POLL})
         })
     }
}
