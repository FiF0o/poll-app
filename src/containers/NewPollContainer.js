/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import { addPollToDb } from '../actions/polls';
import NewPoll from '../components/Polls/NewPoll';


const mapDispatchToProps = (dispatch) => {
    return {
        addNewPoll(e, name, description, uid) {
            e.preventDefault();
            dispatch(addPollToDb(name, description, uid));
        }
    };
};

const mapStateToProps = (state) => {
    const {auth} = state;
    return {
        auth
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPoll);