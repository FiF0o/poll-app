import {getVotes, getPollsAndVotes} from './votes'
// const Jasmine = require('jasmine')

describe('getVotes selector', () => {
    Date.now = jest.fn(() => 1482363367071)

    const mock = {
        byId: {
            'vote1': {
                id: 'vote1',
                uid: 'user2',
                timeStamp: Date.now(),
                pollId: 'poll1'
            },
            'vote2': {
                id: 'vote2',
                uid: 'user3',
                timeStamp: Date.now(),
                pollId: 'poll1'
            }
        },
        allIds: ['vote1', 'vote2'] 
    }

    it('should return all the votes for a given vote id', () => {
        const expected = [
            {
                id: 'vote1',
                uid: 'user2',
                timeStamp: Date.now(),
                pollId: 'poll1'
            },{
                id: 'vote2',
                uid: 'user3',
                timeStamp: Date.now(),
                pollId: 'poll1'
            }
    ]

        expect(getVotes(mock)).toEqual(expected)
    })
})