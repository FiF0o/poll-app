/**
 * Created by jonlazarini on 20/05/17.
 */
//TODO Could normalize state even in a simplier way using byId and allId nodes storing references then .reduce to render relational nodes
export const initialState = {
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    polls: {
        byId: {
            'poll1': {
                name: 'poll name',
                description: 'Marv Luvvhini est un peu un vier.',
                timeStamp: Date.now() - 600,
                //TODO Remove author key and use a users selector instead to avoid duplications...
                author: 'username 1',
                uid: 'user1',
                id: 'poll1',
                // votes: ['vote1', 'vote2'],
                //TODO Add voters selector when passing down the state
                voters: [{uid: 'user2', voteId: 'vote1'}, {uid:'user3', voteId: 'vote2'}]
            },
            'poll2': {
                name: 'poll name 2',
                description: 'lorem ipsum.',
                timeStamp: Date.now() - 600,
                author: 'username 2',
                uid: 'user2',
                id: 'poll2',
                // votes: ['vote3', 'vote4'],
                voters: [{uid: 'user3', voteId:'vote3'}, {uid: 'user1', voteId:'vote4'}]
            }
        },
        allIds: ['poll1', 'poll2']
    },
    // stores relationship here (polls <-> votes <- users) and
    votes: {
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
            },
            'vote3': {
                id: 'vote3',
                uid: 'user3',
                timeStamp: Date.now(),
                pollId: 'poll2'

            },
            'vote4': {
                id: 'vote4',
                uid: 'user1',
                timeStamp: Date.now(),
                pollId: 'poll2'
            },
        },
        allIds: ['vote1', 'vote2', 'vote3', 'vote4',],
    },
    users: {
        byId: {
            "user1": {
                displayName: "username 1",
                email: 'mail@mail.com',
                uid: 'user1',
                photoURL: 'https://placebear.com/100/100',
                // polls: ['poll1'],
                // TODO We could reference votes as well for simplicity, can't be arsed to create selectors
            },
            "user2": {
                displayName: "username 2",
                email: 'mail@mail.com',
                uid: 'user2',
                photoURL: 'https://placebear.com/100/100',
                // polls: ['poll2'],
            },
            "user3": {
                displayName: "username 3",
                email: 'mail@mail.com',
                uid: 'user3',
                photoURL: 'https://placebear.com/100/100',
                // polls: []
            }
        },
        allIds: ["user1", "user2", "user3"]
    },
    routing: {},
    // errors: {message: 'no error'},
};
