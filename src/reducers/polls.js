/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL, REMOVE_POLL} from '../actionTypes';
import omit from 'lodash/omit';

import {initialState} from '../initialState';


export default function polls(state=initialState.polls, action) {

    const { type, key, name, description, uid, timeStamp } = action;

    switch(type) {
        case ADD_POLL:
            return {
                ...state,
                [key]: {
                    name,
                    description,
                    uid,
                    timeStamp
                }
            };

        case REMOVE_POLL:
            return omit(Object.assign({}, state), key);

        default:
            return state;
    }
};
