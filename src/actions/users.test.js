import { addUser
} from './users'

import {
    ADD_USER
    } from '../actionTypes';

// TODO delay otherwise location is undefined...
jest.useFakeTimers();

describe('addUser action', () => {
    const user = {
        displayName: '123',
        uid: 'abc',
        photoURL: 'qwe',
        email: 'mail@mail.com'
    }

    it('should create an action to add a user', () => {
        const expectedAction = {
            type: ADD_USER,
            ...user
        }

        expect(addUser(user)).toEqual(expectedAction)        
    })
})