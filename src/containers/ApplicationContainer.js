/**
 * Created by jonlazarini on 20/05/17.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {signIn, signOut} from '../actions/auth';
import App from '../components/Application/App';


const mapStateToProps = (state) => {
    return {auth: state.auth}
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        signIn: () => signIn(),
        signOut: () => signOut()
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);