import { 
    signedIn,
    signedOut
} from './auth'

import {
    SIGN_IN,
    SIGN_OUT
    } from '../actionTypes';

// TODO delay otherwise location is undefined...
jest.useFakeTimers();

describe('signedIn action', () => {
    const user = {
        displayName: '123',
        uid: 'abc',
        photoURL: 'qwe',
        email: 'mail@mail.com'
    }

    it('should create an action to sign in a user', () => {
        const expectedAction = {
            type: SIGN_IN,
            ...user
        }

        expect(signedIn(user)).toEqual(expectedAction)        
    })

    it('should create an action to sign out a user', () => {
        const expectedAction = {
            type: SIGN_OUT,
        }

        expect(signedOut()).toEqual(expectedAction)        
    })
})