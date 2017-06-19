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
                author: 'user1',
                id: 'poll1',
                votes: ['vote1', 'vote2']
            },
            'poll2': {
                name: 'poll name 2',
                description: 'lorem ipsum.',
                timeStamp: Date.now() - 600,
                author: 'user2',
                id: 'poll2',
                votes: ['vote3', 'vote4', 'vote5']
            }
        },
        allIds: ['poll1', 'poll2']
    },
    votes: {
        byId: {
            'vote1': {
                id: 'vote1',
                author: 'user2',
            },
            'vote2': {
                id: 'vote2',
                author: 'user3',
            },
            'vote3': {
                id: 'vote3',
                author: 'user3',

            },
            'vote4': {
                id: 'vote4',
                author: 'user1',
            },
            'vote5': {
                id: 'vote5',
                author: 'user3',
            },
        },
        allIds: ['vote1', 'vote2', 'vote3', 'vote4', 'vote5'],
    },
    users: {
        byId: {
            "user1": {
                username: "user1",
                name: "User 1",
            },
            "user2": {
                username: "user2",
                name: "User 2",
            },
            "user3": {
                username: "user3",
                name: "User 3",
            }
        },
        allIds: ["user1", "user2", "user3"]
    },
    routing: {},
    // errors: {message: 'no error'},
};
