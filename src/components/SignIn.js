/**
 * Created by jonlazarini on 26/04/17.
 */
import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../database/firebase';
import RaisedButton from 'material-ui/RaisedButton';


export default class SignIn extends Component {

    render() {
        return (
            <div className='auth auth-signin'>
                <RaisedButton
                    label='Sign In'
                    secondary={ true }
                    onTouchTap={ () => { auth.signInWithPopup(googleAuthProvider) } }
                />
            </div>
        )
    }
}
