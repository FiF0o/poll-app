/**
 * Mock and Async
 */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import { addVote, 
    removeVote 
} from './votes'

import {
    ADD_VOTE,
    REMOVE_VOTE
    } from '../actionTypes';

// TODO delay otherwise location is undefined...
jest.useFakeTimers();

// Mock Async
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('addVote action', () => {
    const pollId = '123'
    const uid = 'abc'
    const voteId = 'qwe'

    it('should create an action to add a vote', () => {
        const expectedAction = {
            type: ADD_VOTE,
            pollId,
            uid,
            voteId
        }

        expect(addVote(pollId, uid, {voteId})).toEqual(expectedAction)        
    })

    it('should create an action to removeVote a vote', () => {
        const expectedAction = {
            type: REMOVE_VOTE,
            pollId,
            uid,
            voteId
        }
        expect(removeVote(pollId, uid, {voteId})).toEqual(expectedAction)        
    })
})

// describe('async', () => {
//     afterEach(() => nock.cleanAll())
    
//     it('creates', () => {
//         nock('/')
//             .get('/')
//             .reply(200, { /* from server */ })
//         console.log(nock)
//         const expectedActions = [
//             {},
//             {}
//         ]
//         const store = mockStore({})
       
//         return store.dispatch().then(() => {

//            expect(store.getActions()).toEqual(expectedActions)

//        })
        
//     })
// })