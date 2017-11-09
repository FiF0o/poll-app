/**
 * Created by jonlazarini on 04/07/17.
 */
// import { database } from '../database';
import { FETCHING_POLLS, FETCHED_POLLS } from '../actionTypes';

function fetchingPolls() {
    return {
        type: FETCHING_POLLS
    }
};

export const fetchedPolls = (polls) => {
    return {
        type: FETCHED_POLLS,
        polls
    }
};

// const firebaseRequest = (node) => node;

export const getPollsAsync = () => dispatch => {
  dispatch(fetchingPolls())
    // return firebaseRequest('/path/to/firebase/polls')
    return fetch('/path/to/firebase/polls')
        .then(data => data.json())
        .then(polls => dispatch(fetchedPolls(polls))
            // dispatch(fetchedPolls(shapeDataToState(polls)))
        )
        // .catch(err => dispatch(failureFetching(err)))
};

// store.dispatch(getPollsAsync()) // on login

// https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
function shapeDataToState(polls) {
    // transform data here
    return {
        by: {

        },
        allIds: []
    }
    // { createStore }
}
