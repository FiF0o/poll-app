/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import Polls from '../components/Polls';
// import { destroyMessage } from '../actions/messages';


const mapStateToProps = ({ polls }) => {
    //state.messages (reducer) from our store
    console.log('polls', {polls});
    return { polls };
};

const mapDispatchToProps = (dispatch) => {
    return {
        destroyMessage(key) {
            return () => console.log('func fired!');
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);