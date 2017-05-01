/**
 * Created by jonlazarini on 26/04/17.
 */
import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../database/firebase';
import RaisedButton from 'material-ui/RaisedButton';


export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.SignIn = this.SignIn.bind(this);
        this.SignOut = this.SignOut.bind(this);
    }

    SignIn() {
        auth.signInWithPopup(googleAuthProvider)
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }

    SignOut() {
        auth.signOut()
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }

    render() {

        const { currentUser } = this.props;

        return (
            <div className='auth auth-signin'>
                {
                    !currentUser || currentUser.isAnonymous ?
                        <RaisedButton
                            label={'Sign In'}
                            secondary={ true }
                            onTouchTap={this.SignIn}
                        />
                        :
                        <RaisedButton
                            label={'Sign Out'}
                            secondary={ true }
                            onTouchTap={this.SignOut}
                        />
                }
            </div>
        )
    }
}
