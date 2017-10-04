import { 
    addPoll,
    removePoll
} from './polls'

import {
    ADD_POLL,
    REMOVE_POLL
    } from '../actionTypes';

// TODO delay otherwise location is undefined...
jest.useFakeTimers();

describe('addVote action', () => {
    const poll = {
        name: '123',
        description: 'asd',
        author: 'zxc',
        uid: 'abc',
        id: 'id',
        voters: []
    }
    
    it('should create an action to add a poll', () => {
        const expectedAction = {
            type: ADD_POLL,
            ...poll,
            timeStamp: Date.now(),
        }
        expect(addPoll({...poll})).toEqual(expectedAction)        
    })

    it('should create an action to remove a poll', () => {
        const expectedAction = {
            type: REMOVE_POLL,
            id: poll.id,
        }
        expect(removePoll(poll.id)).toEqual(expectedAction)        
    })
})