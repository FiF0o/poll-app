/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';

export const addVote = (key, userId, author) => {
    return {
        type: ADD_VOTE,
        key,
        userId,
        author
    }
};

export const removeVote = (key, userId) => {
    return {
        type: REMOVE_VOTE,
        key,
        userId
    }
};