import React from 'react';
// import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {Error} from '../Error'
// const defaultProps = {
//   disabled: false,
//   isOnBackground: false,
//   name: null,
//   onClick: null,
//   type: 'button',
//   value: null
// };

// const defaultPropTypes = {
//   disabled: PropTypes.bool,
//   isOnBackground: PropTypes.bool,
//   name: PropTypes.string,
//   onClick: PropTypes.func,
//   type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
//   value: PropTypes.string
// };

export const Auth = ({email, displayName, photoURL, uid, signIn, signOut, isLoading, errorMessage, ...props}) => (
	<div>
		{
			isLoading  && <p>...Loading...</p>
		}
		{
			errorMessage && <Error {...errorMessage} />
		}
		{
			JSON.stringify({...props})
		}
		<FlatButton onTouchTap={() => signIn()} >
			Sign in
		</FlatButton>
		<FlatButton onTouchTap={() => signOut()} >
			Sign out
		</FlatButton>
	</div>
);

// Auth.defaultProps = {
// };

// Auth.propTypes = {
// };
