/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import { database } from '../database/firebase';
import {ADDING_VOTE} from '../actionTypes';

export const addVote = (key, author) => {
    return {
        type: ADD_VOTE,
        key,
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

const votesRef = database.ref('votes');
export const addVoteToDb = (key, author) => {
    return (dispatch) => {
        votesRef.child(key).push(author)
            .then(() => dispatch({type: ADDING_VOTE, key}))
    }
};
