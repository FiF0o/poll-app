/**
 * Created by jonlazarini on 31/05/17.
 */
import {ADD_VOTE, REMOVE_VOTE} from '../actionTypes';
import omit from 'lodash/omit';
// import extend from 'lodash/extend';
// import clone from 'lodash/clone';
import {initialState} from '../initialState';

export default function votes(state=initialState.votes, action) {

    const { type, key, userId, author} = action;

    // const cloclo = Object.assign({}, state, clone(state[key]))
    // console.log('cloclo', cloclo)

    console.log('STATE', state)
    console.log('userId', userId)
    console.log('key', state[key])

    switch(type) {
        case ADD_VOTE:
            return {
                ...state,
                [key]: {
                    ...state[key],
                    [userId]: author
                },

            };

        case REMOVE_VOTE:
            // return omit(Object.assign({}, state), userId);
            return omit(Object.assign({}, state), state[key]);

        default:
            return state
    }
};