/**
 * Created by jonlazarini on 20/05/17.
 */
export const initialState = {
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    polls: {
        'firstPoll': {
            name: 'poll name',
            description: 'Marv Luvvhini est un peu un vier.',
            timeStamp: Date.now() - 600,
            uid: 'firstUser',
        },
        'secondPoll': {
            name: 'poll name 2',
            description: 'lorem ipsum.',
            timeStamp: Date.now() - 600,
            uid: 'secondUser',
        }
    },
    votes: {
        'firstPoll': {
            'firstUser': 'Marv Zgegouz',
            'secondUser': 'Tromblinator',
        },
        'secondPoll': {
            'secondUser': 'Tromblinator',
            'thirdUser': 'thirdUser Name',
        }
    },
    users: {
        'firstUser': {
            displayName: 'Marv Zgegouz',
            email: 'trompette@kikou.com',
            photoURL: 'http://placehold.it/150x150',
            uid: 'firstUser'
        },
        'secondUser': {
            displayName: 'Tromblinator',
            email: 'trompette@kikou.com',
            photoURL: 'http://placehold.it/150x150',
            uid: 'secondUser'
        },
        'thirdUser': {
            displayName: 'thirdUser Name',
            email: 'third@kikou.com',
            photoURL: 'http://placehold.it/150x150',
            uid: 'thirdUser'
        }
    },
    routing: {},
    // errors: {message: 'no error'},
};
