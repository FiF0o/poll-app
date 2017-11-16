import React from 'react';
// import PropTypes from 'prop-types';

export const Error = ({errorMessage}) => (
	<div>
    <p>ouch! {errorMessage} :(</p>
	</div>
);

Error.defaultProps = {
};

Error.propTypes = {
};
