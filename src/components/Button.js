/**
 * Created by jonlazarini on 24/04/17.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export const DebugButton = ({...props}) => {
    // console.log({...props})
    return ( <FlatButton label="Default" primary={props.primary}/> )
};

export const NewButton = () => ( <DebugButton primary={true} /> )
