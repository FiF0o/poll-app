/**
 * Created by jonlazarini on 04/05/17.
 */
export const hasVoted = (voteList, id) => {
    // votes exists and checks if there is a uid (auth.uid/current user) in the list of votes
    return voteList && voteList.includes(id);
};

/*export const getVoteId = (polls, votes, pollId, uid) => {
    return polls.filter((p) => {
        p.id === pollId
        return p.votes.map((v) => {
            if (v.uid === uid) return v.id
        })
    });
};*/
