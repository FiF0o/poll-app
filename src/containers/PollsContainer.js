/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';
import {removePoll} from '../actions/polls';
import {addVote, removeVote} from '../actions/votes';
import { getPolls } from '../reducers';


const mapStateToProps = (state) => {
    return {
        polls: getPolls(state),
        auth: state.auth,
        users: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll(id) {
            return () => dispatch(removePoll(id));
        },
        addVote(name, description, author, id) {
            return () => dispatch(addVote(name, description, author, id));
        },
        /*removeVote(key, id) {
            return () => dispatch(removeVote(key, id))
        }*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
