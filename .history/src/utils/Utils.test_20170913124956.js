import SignIn from '../components/SignIn/SignIn';
import { deleteByItem as Remover } from './deleteByItem';
import { hasVoted } from './VoteMethods';
import { getVotesForPoll } from './PollUtils';

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

describe('deleteByItem function', () => {

    it('should remove the correct item in the list', () => {
    
    })

})

describe('hasVoted method', () => {
    
    const mockVoteList = ['user1', 'user2'];
    const voter = 'user1';
    const didVote = hasVoted(mockVoteList, voter)
    // hasVoted()
    it('should accept an array and an id as parameters', () => {
        const toto = {user2: 'u2'}
        expect(toto.user2).toContain('u2');
    })
    
    it('should return true if the id is found in the list', () => {
        expect(didVote).toBe(true)
        expect(didVote).not.toBe(false)
    })
    
    it('should return false if the id is not in the list', () => {
        const didNotVote = hasVoted(mockVoteList, 'user3')
        expect(didNotVote).toBe(false)
    })
})



/**
 * Methods for FCM functions
 */


