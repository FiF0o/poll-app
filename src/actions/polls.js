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

export const addPollToDb = (name, description, uid) => {
    const pollsRef = database.ref('polls');
    return (dispatch) => {
        const payload = {
            name,
            description,
            uid,
            key: Date.now()
        };
        pollsRef.push(payload)
            .then(() => {
                console.log(`${{...payload}} added to the DB!`);
                // addPoll(payload) to follow from middleware
                dispatch({type: ATTEMPT_ADD_POLL});
        })
    }
};
