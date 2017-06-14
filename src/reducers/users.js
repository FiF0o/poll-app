/**
 * Created by jonlazarini on 20/05/17.
 */
import {ADD_USER} from '../actionTypes';

import {initialState} from '../initialState';


export default function users(state=initialState.users, action) {

    const { type, displayName, email, photoURL, uid } = action;

    switch(type) {
        case ADD_USER:
            return {
                ...state,
                [uid]: {
                    displayName,
                    email,
                    photoURL,
                    uid
                }
            };

        default:
            return state;
    }
};
