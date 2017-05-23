/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';
import {removePoll} from '../actions/polls';


const mapStateToProps = (state) => {
    return {
        polls: state.polls,
        users: state.users,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll(key) {
            return () => dispatch(removePoll(key));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
