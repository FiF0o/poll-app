import { addVote } from './votes'
import {
    ADD_VOTE
    } from '../actionTypes';

// TODO Replace with Mocks as this may a reason why the test throws an error with --browser
jest.useFakeTimers();

describe('addVote action', () => {
    
    it('should create an action to add a vote', () => {
        const pollId = '123'
        const uid = 'abc'
        const voteId = 'qwe'

        const expectedAction = {
            type: ADD_VOTE,
            pollId,
            uid,
            voteId
        }
        expect(addVote(pollId, uid, {voteId})).toEqual(expectedAction)
        
    })

})