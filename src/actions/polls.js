/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL, REMOVE_POLL, ATTEMPT_ADD_POLL} from '../actionTypes';
import {database} from '../database/firebase'

//TODO Quick fix initializing votes as an empty array if undefined so that ImmutableJs can push/etc.. into it
export const addPoll = ({name, description, author, uid, id, votes=[] }) => {
    return {
        type: ADD_POLL,
        name,
        description,
        timeStamp: Date.now(),
        author,
        uid,
        id,
        votes
    }
};

export const removePoll = (id) => {
    return {
        type: REMOVE_POLL,
        id
    }
};

/*
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
*/
