/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';
import {removePoll} from '../actions/polls';
import {addVote, removeVote} from '../actions/votes';
import { getPolls } from '../reducers';
import * as fromUsersSelector from '../selectors/users';
import * as fromVotesSelector from '../selectors/votes';


const mapStateToProps = (state) => {
    return {
        polls: getPolls(state),
        auth: state.auth,
        users: fromUsersSelector.getUsers(state.users),
        votes: fromVotesSelector.getVotes(state.votes)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll(id) {
            return () => dispatch(removePoll(id));
        },
        addVote(key, userId, id) {
            return () => dispatch(addVote(key, userId, id));
        },
        /*removeVote(key, id) {
            return () => dispatch(removeVote(key, id))
        }*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
