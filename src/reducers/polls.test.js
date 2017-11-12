import polls from './polls';

// mock date - Date extended so the ts is frozen.
const Date = require('./__mocks__/date').__createDate

describe('polls reducer', () => {

    it('should handle initial state', () => {
        expect(
            polls({}, {})
        )
        .toEqual({
            byId: {},
            allIds: []
        })
    })

    it('should handle ADD_POLL', () => {
        expect(
            polls({}, {
                type: 'ADD_POLL',
                name: 'poll name',
                description: 'Marv Luvvhini est un peu un vier.',
                timeStamp: Date(),
                author: 'username 1',
                uid: 'user1',
                id: 'poll1',
                voters: []
            })
        )
        .toEqual({
            byId: {
                poll1: {
                    name: 'poll name',
                    description: 'Marv Luvvhini est un peu un vier.',
                    timeStamp: Date(),
                    author: 'username 1',
                    uid: 'user1',
                    id: 'poll1',
                    voters: []
                }
            },
            allIds:['poll1']
        })
    })

    it('should handle REMOVE_POLL', () => {
        expect(
            polls({
                byId: {
                    poll1: {
                        name: 'poll name',
                        description: 'Marv Luvvhini est un peu un vier.',
                        timeStamp: Date(),
                        author: 'username 1',
                        uid: 'user1',
                        id: 'poll1',
                        voters: []
                    }
                },
                allIds:['poll1']
            }, {
                type: 'REMOVE_POLL',
                id: 'poll1'
            })
        )
        .toEqual({byId:{}, allIds:[]})
    })
})