/**
 * Created by jonlazarini on 14/06/17.
 */
import { ADD_USER } from '../actionTypes'

export const addUser = (user) => {
    const { displayName, uid, photoURL, email } = user;
    return {
        type: ADD_USER,
        displayName,
        uid,
        photoURL,
        email
    };
};