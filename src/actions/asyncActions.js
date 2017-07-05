/**
 * Created by jonlazarini on 04/07/17.
 */
import { database } from '../database';
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

const firebaseRequest = (node) => node;

export const getPollsAsync = () => dispatch => {
  dispatch(fetchingPolls())
    firebaseRequest('/path/to/firebase')
        .then((data) => {
            console.log('data', data)
            return data
        }) // to json() ? response.polls
        .then((polls) => {
            console.log('polls', polls)
            dispatch(fetchedPolls(shapeDataToState(polls)))
        })
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
