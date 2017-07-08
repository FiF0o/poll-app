/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';
import {removePollFromDb} from '../actions/polls';
import {addVoteToDb, removeVoteFromDB} from '../actions/votes';
import * as fromUsersSelector from '../selectors/users';
// import * as fromVotesSelector from '../selectors/votes';
import {getPolls} from '../reducers/polls';


const mapStateToProps = (state) => {
    return {
        // polls: fromVotesSelector.getPollsAndVotes(state.polls, state.votes), // renders polls and their votes
        polls: getPolls(state.polls),
        auth: state.auth,
        users: fromUsersSelector.getUsers(state.users),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll(id) {
            return () => dispatch(removePollFromDb(id));
        },
        addVote(pollId, uid) {
            return () => dispatch(addVoteToDb({pollId, uid}));
        },
        removeVote(pollId, uid, voteKey) {
            return () => dispatch(removeVoteFromDB(pollId, uid, voteKey)) // vote key to delete
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
