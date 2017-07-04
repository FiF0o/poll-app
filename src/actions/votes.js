/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import { database } from '../database/firebase';
// import {ADDING_VOTE} from '../actionTypes';

const addVote = (pollId, uid, voteId) => {
    return {
        type: ADD_VOTE,
        pollId,
        uid,
        voteId
    }
};

export const removeVote = (pollId, uid, voteId) => {
    return {
        type: REMOVE_VOTE,
        pollId,
        uid,
        voteId
    }
};

const votesRef = database.ref('votes');
export const removeVoteFromDB = (pollId, uid, voteKey) => {
// export const removeVoteFromDB = (pollKey, uid, voteKey) => (dispatch) => votesRef...
    return (dispatch) => {
        votesRef.child(voteKey).remove()
            .then(() => dispatch(removeVote(pollId, uid, voteKey)))
    };
};

export const addVoteToDb = ({pollId, uid}) => {
    return (dispatch) => {
        votesRef.push({uid, timeStamp: Date.now(), pollId})
            // .then(() => dispatch({type: ADDING_VOTE, key}))
            .then((snap) => dispatch(addVote(pollId, uid, snap.key)))
    }
};
