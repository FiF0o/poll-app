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

    const mockVotes = ['vote1', 'vote2']

    it('should remove the correct item in the list', () => {
        const voteToRemove = 'vote1'
        const expectedVotes = ['vote2']
        const hasBeenRemoved = Remover(mockVotes, voteToRemove)
        expect(hasBeenRemoved).toEqual(expect.arrayContaining(expectedVotes))
    })
    
    it('should return the same list if the id given is not in the list', () => {
        const voteToRemove = 'vote3'
        const hasBeenRemoved = Remover(mockVotes, voteToRemove)
        expect(hasBeenRemoved).toEqual(expect.arrayContaining(mockVotes))
    })

})

describe('hasVoted method', () => {
    
    const mockVoteList = ['user1', 'user2'];
    const voter = 'user1';
    const didVote = hasVoted(mockVoteList, voter)
    
    it('should return true if the id is found in the list', () => {
        expect(didVote).toBe(true)
        expect(didVote).not.toBe(false)
    })
    
    it('should return false if the id is not in the list', () => {
        const didNotVote = hasVoted(mockVoteList, 'user3')
        expect(didNotVote).toBe(false)
    })
})

describe('getVotesForPoll method', () => {

    const mockVotes = [
        {uid: 'user2', voteId: '0a'},
        {uid: 'user3', voteId: '1a'}
    ]
    const id = '0'
    const expectedVote = {uid: 'user2', voteId: '0a'}

    it('should get the correct votes for the poll', () => {
        expect(getVotesForPoll(mockVotes, id)).toEqual(expectedVote)
    })
})

/**
 * Methods for FCM functions
 */
