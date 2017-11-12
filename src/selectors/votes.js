    /**
 * Created by jonlazarini on 21/06/17.
 */
const getAllVotes = (state) =>
    state.allIds.map((v) => state.byId[v]);

export const getVotes = (state) => getAllVotes(state);

const getById = (collection) => (id) => collection.byId[id];

const expandPollVotes = (votes) => (poll) => Object.assign({}, poll, {
    // ...poll
    votes: poll.votes.map(getById(votes))
});

export const getPollsAndVotes = (polls, votes) =>
    polls.allIds
        .map(getById(polls))
        .map(expandPollVotes(votes));
