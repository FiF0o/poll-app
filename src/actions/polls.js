/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL, REMOVE_POLL } from '../actionTypes';
import {database} from '../database/firebase';

//TODO Quick fix initializing votes as an empty array if undefined so that ImmutableJs can push/etc.. into it
export const addPoll = ({name, description, author, uid, id, voters=[] }) => {
    return {
        type: ADD_POLL,
        name,
        description,
        timeStamp: Date.now(),
        author,
        uid,
        id,
        // votes,
        voters
    }
};

export const removePoll = (id) => {
    return {
        type: REMOVE_POLL,
        id
    }
};

const pollsRef = database.ref('polls');
// we don't want the e - event to give in the payload
export const addPollToDb = ({name, description, author, uid}) => {
    return (dispatch) => {
        const payload = {
            name,
            description,
            author,
            uid
        };
        pollsRef.push(payload)
            .then((snap) => {
                // TODO Add listeners to the app
                // dispatch({type: ATTEMPT_ADD_POLL});
                dispatch(addPoll({name, description, author, uid, id: snap.key}))
        })
    }
};

export const removePollFromDb = (key) => {
     return (dispatch) => {
         pollsRef.child(key).remove()
             .then(() => {
                 // dispatch({type: ATTEMPT_REMOVE_POLL})
                 dispatch(removePoll(key))
         })
     }
};
