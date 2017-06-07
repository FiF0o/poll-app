/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import Immutable from 'immutable';

import {initialState} from '../initialState';

export default function votes(state=initialState.votes, action) {

    const { type, key, userId, author} = action;

    switch(type) {
        case ADD_VOTE:
            // in votes node, getting 'key':{'userId'} property and add author to it
            return Immutable.fromJS(state).setIn([key, userId], author).toJS();
            // return {
            //     ...state,
            //     [key]: {
            //         ...state[key],
            //         [userId]: author
            //     },
            //
            // };

        case REMOVE_VOTE:
            return Immutable.fromJS(state).deleteIn([key, userId], author).toJS();

        default:
            return state
    }
};