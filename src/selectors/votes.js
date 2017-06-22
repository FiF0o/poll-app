/**
 * Created by jonlazarini on 21/06/17.
 */
const getAllVotes = (state) =>
    state.allIds.map(v => state.byId[v]);

export const getVotes = (state) => getAllVotes(state);

export const getVotesForPoll = (state, votes, polls) => {
    const allPolls = polls.allIds.map(p => polls.byId[p]);
    console.log('allPolls', allPolls)
    const listVotes = allPolls.map(p => p.votes.map(v => votes.byId[v]));
    console.log('listVotes', listVotes)
};
