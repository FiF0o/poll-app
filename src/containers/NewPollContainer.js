/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import { addPoll } from '../actions/polls';
import NewPoll from '../components/Polls/NewPoll';


const mapDispatchToProps = (dispatch) => {
    return {
        addNewPoll(e, name, description, author, uid, id) {
            e.preventDefault();
            dispatch(addPoll({name, description, author, uid, id}));
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