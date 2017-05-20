/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import {addPoll} from '../actions/polls';
import NewPoll from '../components/Polls/NewPoll';


const mapDispatchToProps = (dispatch) => {
    return {
        addNewPoll(e, name, description, uid) {
            e.preventDefault();
            dispatch(addPoll(name, description, uid));
        }
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(NewPoll);