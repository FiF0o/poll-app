import auth from './auth';

describe('auth reducer', () => {
    it('should handle initial state', () => {
        expect(
            auth(undefined, {})
        )
        .toEqual({
            status: 'ANONYMOUS',
            email: null,
            displayName: null,
            photoURL: null,
            uid: null
        })
    })

    it('should handle SIGN_IN', () => {
        expect(
            auth({}, {
                type: 'SIGN_IN',
                email: 'mail@mail.com',
                displayName: 'First',
                photoURL: 'image.jpg',
                uid: '123' 
            })
        )
        .toEqual({
            status: 'SIGNED_IN',
            email: 'mail@mail.com',
            displayName: 'First',
            photoURL: 'image.jpg',
            uid: '123' 
        })
    })

    it('should handle SIGN_OUT', () => {
        expect(
            auth({
                status: 'SIGNED_IN',
                email: 'mail@mail.com',
                displayName: 'First',
                photoURL: 'image.jpg',
                uid: '123' 
            }, {
                type: 'SIGN_OUT'
            })
        )
        .toEqual({
            status: 'ANONYMOUS',
            email: null,
            displayName: null,
            photoURL: null,
            uid: null
        })
    })
})