/**
 * Created by jonlazarini on 26/04/17.
 */
import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { auth } from '../database/firebase';


export default class UserProfile extends Component {

    render() {

        const { currentUser } = this.props;

        return (
            <div>
                <p>{currentUser.displayName}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.photoURL}</p>
                <RaisedButton
                    label='Sign Out'
                    primary={ true }
                    onTouchTap={ () => { auth.signOut() } }
                />
            </div>
        );
    }
}
