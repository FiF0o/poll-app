/**
 * Created by jonlazarini on 26/04/17.
 */
import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../database/firebase';
import RaisedButton from 'material-ui/RaisedButton';

// import { RequestMessagingPermissions } from '../../functions/RequestMessagingPermissions';


export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: props.currentUser
        };

        this.SignIn = this.SignIn.bind(this);
        this.SignOut = this.SignOut.bind(this);
    }

    SignIn() {
        auth.signInWithPopup(googleAuthProvider)
            //TODO ? can trigger RequestMessagingPermissions in promise here
            .then((snap) => {
                // grab the user from the Promise
                const { user } = snap;
                // init FCM - and service workers job once server token is successfully given/assigned to the user
                // RequestMessagingPermissions(user);

            })
            .catch((err) => console.error(err));
    }

    SignOut() {
        auth.signOut();
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
