/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';
import {removePollFromDb} from '../actions/polls';
import {addVoteToDb, removeVote} from '../actions/votes';
import * as fromUsersSelector from '../selectors/users';
import * as fromVotesSelector from '../selectors/votes';


const mapStateToProps = (state) => {
    return {
        polls: fromVotesSelector.getPollsAndVotes(state.polls, state.votes),
        auth: state.auth,
        users: fromUsersSelector.getUsers(state.users),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll(id) {
            return () => dispatch(removePollFromDb(id));
        },
        addVote(pollKey, uid) {
            return () => dispatch(addVoteToDb({pollKey, uid}));
        },
        removeVote(key, id) {
            return () => dispatch(removeVote(key, id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
