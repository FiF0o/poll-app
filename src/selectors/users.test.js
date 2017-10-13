import {getUsers} from './users'

describe('getUsers selector', () => {
    const mock = {
            byId: {
                "user1": {
                    displayName: "username 1",
                    email: 'mail@mail.com',
                    uid: 'user1',
                    photoURL: 'https://placebear.com/100/100',
                },
                "user2": {
                    displayName: "username 2",
                    email: 'mail@mail.com',
                    uid: 'user2',
                    photoURL: 'https://placebear.com/100/100',
                }
            },
            allIds: ["user1", "user2"]
    }

    it('should return all the users for a given user id', () => {
        const expected = [{"displayName": "username 1", "email": "mail@mail.com", "photoURL": "https://placebear.com/100/100", "uid": "user1"}, {"displayName": "username 2", "email": "mail@mail.com", "photoURL": "https://placebear.com/100/100", "uid": "user2"}]
        expect(getUsers(mock)).toEqual(expected)
    })
})