import SignIn from '../components/SignIn/SignIn';
import { deleteByItem as Remover } from './deleteByItem';

describe("A test ", () => {
    it("Should work", () => {
        expect(true).toEqual(true)
    })
});

describe('', () => {
    console.log('Remover', Remover)
    const arrMock = [{
        name: 'poll name',
        description: 'Marv Luvvhini est un peu un vier.',
        timeStamp: Date.now() - 600,
        author: 'username 1',
        uid: 'user1',
        id: 'poll1',
    },{
        name: 'poll name 2',
        description: 'lorem ipsum.',
        timeStamp: Date.now() - 600,
        author: 'username 2',
        uid: 'user2',
        id: 'poll2',
    }]

    it('should remove the correct item in the list', () => {
        console.log('arrMock', arrMock)
    })
})