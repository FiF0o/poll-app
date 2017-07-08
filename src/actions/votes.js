/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import { database } from '../database/firebase';
// import {ADDING_VOTE} from '../actionTypes';

export const addVote = (pollId, uid, {voteId}) => {
    return {
        type: ADD_VOTE,
        pollId,
        uid,
        voteId
    }
};

export const removeVote = (pollId, uid, {voteId}) => {
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

        /*const newVote = database.ref().child('votes').push();
        const newVoteKey = newVote.key;
        const payload = {
            uid,
            voteId: newVoteKey
        };
        // create the data when want to update with our payload in our DB - denormalized data
        const updatedVoteData = {};
        updatedVoteData[`polls/${pollId}/voters/${newVoteKey}`] = payload;
        updatedVoteData[`votes/${newVoteKey}`] = {...payload, timeStamp: Date.now(), pollId}; // add pollId to be pushed as well
        // Do a deep update
        database.ref().update(updatedVoteData, (err) => {
            if(err) console.log(`Error updating data: ${err}`)
        })*/


        // .then(() => dispatch({type: ADDING_VOTE, key}))
        // .then((snap) => database.ref('/polls').child(pollId).child('voters').push({uid, voteId: snap.key}) )
            // .then(() => dispatch({type: ADDING_VOTE, key}))
            // .then((snap) => dispatch(addVote(pollId, uid, snap.key)))
    }
};
