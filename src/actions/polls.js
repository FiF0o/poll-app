/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL, REMOVE_POLL} from '../actionTypes';

export const addPoll = (name, description, uid, key = Date.now()) => {
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
