import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Auth} from '../components/Auth';
import {signIn} from '../actions/auth';


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errorMessage: state.errors  ,
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    signIn: () => signIn()
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);