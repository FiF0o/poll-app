/**
 * Created by jonlazarini on 20/05/17.
 */
import {initialState} from '../initialState';
import {SIGN_IN, SIGN_OUT, SIGNED_IN, ANONYMOUS} from '../actionTypes';


export default function auth(state=initialState.auth, action) {

    const { type, email, displayName, uid, photoURL } = action;

    switch(type) {
        case SIGN_IN:
            return {
                status: SIGNED_IN,
                email,
                displayName,
                photoURL,
                uid
            };

        case SIGN_OUT:
            return {
                status: ANONYMOUS,
                email: null,
                displayName: null,
                photoURL: null,
                uid: null
            };

        default:
            return state;
    }
}
