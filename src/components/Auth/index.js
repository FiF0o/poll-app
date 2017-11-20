import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {Error} from '../Error';

const defaultProps = {
	auth: {
		email: null,
		displayName: null,
		photoURL: null,
		uid: null
	},
	signIn: ()=> {},
	signOut: ()=> {}
};

const defaultPropTypes = {
	auth: PropTypes.shape({
		email: PropTypes.string,
		displayName: PropTypes.string,
		photoURL: PropTypes.string,
		uid: PropTypes.string
	}),
	signIn: PropTypes.func,
	signOut: PropTypes.func
};


export const Auth = ({auth, signIn, signOut, errorMessage, isLoading}) => (
	<div>
		{
			isLoading && <p>...Loading...</p>
		}
		{
			errorMessage && <Error {...errorMessage} />
		}
		{
			!auth.email ?
			<p>you are not logged in</p> :
				<div className='profile'>
					<p>{auth.email}</p>
					<p>{auth.displayName}</p>
					<p>{auth.photoURL}</p>
					<p>{auth.uid}</p>
				</div>
		}
		{
			auth.email ?
			<FlatButton
				id='sign-out'
				onTouchTap={() => signOut()} >
				Sign out
			</FlatButton>
		:
			<FlatButton
				id={'sign-in'}
				onTouchTap={() => signIn()} >
				Sign in
			</FlatButton>
		}
	</div>
);

Auth.defaultProps = {
	...defaultProps
};

Auth.propTypes = {
	...defaultPropTypes
};
