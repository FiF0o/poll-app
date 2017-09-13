/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL, REMOVE_POLL, ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import { combineReducers } from 'redux';
import Immutable from 'immutable';

import {initialState} from '../initialState';

/**
 * @param state
 * @param action
 * @returns {*}
 */
//TODO can be a separate reducer file
const poll = (state=initialState.polls.byId[0], action) => {
    const { type, name, description, timeStamp, author, uid, id, voters } = action;
    switch(type) {
        case ADD_POLL:
            return {
                id,
                name,
                description,
                timeStamp,
                author,
                uid,
                // votes,
                voters
            };
        case REMOVE_POLL:
            return id;
        case ADD_VOTE:
            return {
                pollId: action.pollId,
                uid,
                voteId: action.voteId
            };

        default:
            return state;
    }
};


/**
 * Combining reducers to normalize the state shape
 */

/**
 * @param state
 * @param action
 * @returns {*}
 */
const byId = (state={}, action) => {
    const { type, id, uid } = action;
    switch(type) {
        case ADD_POLL:
            return {
                ...state,
                // get poll reducer here and creates the poll object to be pushed in allIds arr later
                [id]: poll(state[id], action)
            };
        case REMOVE_POLL:
            return Immutable.Map(state).delete(id).toJS();
        case ADD_VOTE:
            return Immutable.fromJS(state).updateIn([action.pollId, 'voters'], list => {
                return list.push({uid, voteId: action.voteId})
            }).toJS();
        case REMOVE_VOTE:
            /*return state[action.pollId].votes.reduce((accumulator, currentValue) => {
                if (currentValue === id) {
                    return accumulator
                } else {
                    return [...accumulator, currentValue];
                }
            }, []);*/

            // return state[action.pollId].votes.filter(vote => vote !== id);

            //get the index to remove in the array
            let index = state[action.pollId].voters.indexOf(uid);
            return Immutable.fromJS(state).updateIn([action.pollId, 'voters'], list => list.splice(index, 1)).toJS();
        default:
            return state;
    }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
/** Normalized state, Arrayified **/

const deleteByItem = (arr, item) => arr.filter(i => i !== item);

const allIds = (state=[], action) => {
    const { type, id } = action;
    switch(type) {
        case ADD_POLL:
            return [...state, id];
        case REMOVE_POLL:
            let newList = Immutable.List(state);
            console.log('newList', newList)
            return deleteByItem(newList, id).toJS();
        default:
            return state;
    }
};

const polls = combineReducers({byId, allIds});

export default polls


//TODO Move into container perhaps?
// Data manipulation will be done here.
const getAllPolls = (state) =>
    // retrieves all the polls to be rendered in the view
    state.allIds.map(id => state.byId[id]);


/*
 is exported as a default function for abstraction
 available in index reducer so we can call it from index and don't have to change this function in multiple places
 */
export const getPolls = (state) => {
  return getAllPolls(state)
};
