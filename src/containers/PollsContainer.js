/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';
import {removePollFromDb} from '../actions/polls';
import {addVote, addVoteToDb, removeVote} from '../actions/votes';


const mapStateToProps = (state) => {
    const {votes} = state;
    return {
        polls: state.polls,
        users: state.users,
        auth: state.auth,
        votes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll(key) {
            return () => dispatch(removePollFromDb(key));
        },
        addVote(key, name) {
            return () => dispatch(addVoteToDb(key, name));
        },
        removeVote(key, id) {
            return () => dispatch(removeVote(key, id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
