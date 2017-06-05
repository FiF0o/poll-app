/**
 * Created by jonlazarini on 04/05/17.
 */
export const hasVoted = (voteList, id) => {
    // votes exists and checks if there is a uid (auth.uid/current user) in the list of votes
    return voteList && Object.keys(voteList).includes(id);
};
