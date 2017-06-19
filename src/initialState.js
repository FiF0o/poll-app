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
        /*'firstPoll': {
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
        }*/
    },
    votes: {
        'firstPoll': {
            'dfgdfgdf': 'Marv Zgegouz',
            'seconfdgfgdfgdfgdfdUser': 'Tromblinator',
        },
        'secondPoll': {
            'fgfdgdfgdf': 'Tromblinator',
            'gfdgdfgdfgdfgdfgdf': 'thirdUser Name',
        }
    },
    users: {
        /*'firstUser': {
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
        }*/
    },
    routing: {},
    // errors: {message: 'no error'},
};
