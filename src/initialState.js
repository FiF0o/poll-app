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
                author: 'username 1',
                uid: 'user1',
                id: 'poll1',
                votes: ['vote2', 'vote1']
            },
            'poll2': {
                name: 'poll name 2',
                description: 'lorem ipsum.',
                timeStamp: Date.now() - 600,
                author: 'username 2',
                uid: 'user2',
                id: 'poll2',
                votes: ['vote3', 'vote4']
            }
        },
        allIds: ['poll1', 'poll2']
    },
    votes: {
        byId: {
            'vote1': {
                id: 'vote1',
                uid: 'user2',
                // author: 'username 2'
            },
            'vote2': {
                id: 'vote2',
                uid: 'user3',
                // author: 'username 3'
            },
            'vote3': {
                id: 'vote3',
                uid: 'user3',
                // author: 'username 3'

            },
            'vote4': {
                id: 'vote4',
                uid: 'user1',
                // author: 'username 1'
            },
            'vote5': {
                id: 'vote5',
                uid: 'user3',
                // author: 'username 3'
            },
        },
        allIds: ['vote1', 'vote2', 'vote3', 'vote4', 'vote5'],
    },
    users: {
        byId: {
            "user1": {
                displayName: "username 1",
                email: 'mail@mail.com',
                uid: 'user1',
                photoURL: 'https://placebear.com/100/100'
            },
            "user2": {
                displayName: "username 2",
                email: 'mail@mail.com',
                uid: 'user2',
                photoURL: 'https://placebear.com/100/100'
            },
            "user3": {
                displayName: "username 3",
                email: 'mail@mail.com',
                uid: 'user3',
                photoURL: 'https://placebear.com/100/100'
            }
        },
        allIds: ["user1", "user2", "user3"]
    },
    routing: {},
    // errors: {message: 'no error'},
};
