/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_POLL} from '../actionTypes';

import {initialState} from '../initialState';


export default function polls(state=initialState.polls, action) {
    console.log('state REDUCER', state)

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

        default:
            return state;
    }
};
