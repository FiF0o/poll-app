/**
 * Created by jonlazarini on 26/04/17.
 */
import React, { Component } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

import { auth } from '../database/firebase';

//TODO Extract into an own stylesheet
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 380,
        height: 'auto',
        overflowY: 'auto',
    },
};

export default class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: this.props.currentUser // keeps currentUser in child for future reference
        }
    }

    render() {

        const { currentUser } = this.props;

        return (
            <div style={styles.root}>
                {
                    !currentUser || currentUser.isAnonymous ?
                        <div style={{textAlign: 'center', fontSize: '2em', padding: '1em'}}>Please login to access your
                            polls</div>
                        :
                        <GridList
                            cellHeight={styles.gridList.width}
                            style={styles.gridList}
                            padding={15}
                            cols={1}
                        >
                            <Subheader>Profile</Subheader>
                            <GridTile
                                title={ <b>{currentUser.displayName}</b> }
                                subtitle={ <span>{currentUser.email}</span> }
                                cols={1}
                                rows={1}
                                actionIcon={
                                    <RaisedButton
                                        label='Sign Out'
                                        primary={ true }
                                        onTouchTap={ () => {
                                            auth.signOut()
                                        } }
                                        style={{marginRight: 16}}
                                    />
                                }
                            >
                                <img src={ currentUser.photoURL } alt={ currentUser.displayName }/>
                            </GridTile>
                        </GridList>
                    }
                </div>
        );
    }
}
