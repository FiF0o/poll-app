/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import Immutable from 'immutable';
import {combineReducers} from 'redux';

import {initialState} from '../initialState';

const vote = (state=initialState.votes.byId[0], action) => {
    const { type, uid, voteId} = action;
    switch(type) {
        case ADD_VOTE:
            return {
                uid,
                voteId
            };
        case REMOVE_VOTE:
            return {
                voteId
            };
        default:
            return state
    }
};

const byId = (state=initialState.votes.byId, action) => {
  const { type, voteId } = action;
    switch (type) {
        case ADD_VOTE:
            // in votes node, getting 'key':{'userId'} property and add author to it
            return {
                ...state,
                [voteId]: vote(state[voteId], action)
            };
        case REMOVE_VOTE:
            return Immutable.fromJS(state).delete(voteId).toJS();
        default:
            return state
    }
};

const allIds = (state=initialState.votes.allIds, action) => {
    const { type, voteId } = action;
    switch (type) {
        case ADD_VOTE:
            return [...state, voteId];
        case REMOVE_VOTE:
            let ind = state.indexOf(voteId);
            // gets a key
            return Immutable.fromJS(state).deleteIn([ind]).toJS();
        default:
            return state
    }
};

const votes = combineReducers({byId, allIds});

export default votes;
