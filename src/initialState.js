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
            votes: {
                firstUser: 'Marv Zgegouz'
            }
        }
    },
    users: {
        'firstUser': {
            displayName: 'Marv Zgegouz',
            email: 'trompette@kikou.com',
            photoURL: 'http://placehold.it/150x150'
        }
    },
    routing: {

    }
};
