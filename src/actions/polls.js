/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL} from '../actionTypes';

export const addPoll = (name, description, key = Date.now(), uid) => {
    return {
        type: ADD_POLL,
        name,
        description,
        key,
        timeStamp: Date.now(),
        uid
    }
};
