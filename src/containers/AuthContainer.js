import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Auth} from '../components/Auth';
import {signIn, signOut} from '../actions/auth';


const mapStateToProps = (state) => {
  const {auth, errorMessage, isLoading} = state;
  return {
    auth,
    errorMessage,
    isLoading
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    signIn: () => signIn(),
    signOut: () => signOut()
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);