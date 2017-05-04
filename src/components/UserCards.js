/**
 * Created by jonlazarini on 27/04/17.
 */
import React, { Component } from 'react';

import { GridList } from 'material-ui/GridList';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

import map from 'lodash/map';
import { database } from '../database/firebase';

import { CardExampleWithAvatar as UserCard } from './UserCard';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width:'960px',
        height: 'auto'
    }
};

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
          polls: props.listPolls
        };

        this.handleVote = this.handleVote.bind(this);
        this.handleUnvote = this.handleUnvote.bind(this);
        this.deletePoll = this.deletePoll.bind(this);

        this.usersRef = database.ref('/users');
        this.pollsRef = database.ref('/polls');
    }

    deletePoll(key, user) {
        this.pollsRef
            .child(key)
            .remove();

        this.usersRef.child(`/${user}/polls/${key}`)
            .remove();
    }

    handleVote(vote, user, name) {
        database.ref('/polls')
            .child(vote)
            .child('/votes')
            .child(user)
            .set(name);

        database.ref(`/users/${user}/polls/${vote}/votes/${user}/`)
            .set(name);
    }

    handleUnvote(vote, user) {
        database.ref('/polls')
            .child(vote)
            .child('/votes')
            .child(user)
            .remove();

        database.ref(`/users/${user}/polls/${vote}/votes/${user}/`)
            .remove();
    }


    render() {

        const { polls } = this.state;

        return (
            <div style={styles.root} >
                <GridList
                    style={styles.gridList}
                    cellHeight={styles.gridList.height}
                    padding={10}
                    cols={2}
                >
                    <Subheader><b>Polls</b></Subheader>
                    {
                        polls === null  ?
                        <div>There are no poll available yet!</div>
                        :
                        map(polls, (poll, key) => {

                            // poll.polls is available in the object.........
                            const { polls, uid,  displayName } = poll;

                            return (
                                <GridList
                                    style={styles.gridList}
                                    cellHeight={styles.gridList.height}
                                    padding={10}
                                    cols={2}
                                    key={key}
                                >
                                    <List>
                                        <ListItem disabled={true}
                                                  leftAvatar={
                                                      <Avatar
                                                          src={poll.photoURL}
                                                      />
                                                  }
                                        >
                                            {poll.displayName}
                                        </ListItem>
                                    </List>
                                    <Subheader>polls created by: <b>{poll.email}</b> - {poll.uid}</Subheader>
                                    {
                                        map(polls, (userPolls, key) => {
                                            return (
                                                <UserCard
                                                    key={key}
                                                    handleVote={() => {this.handleVote(key, uid, displayName)} }
                                                    handleUnvote={() => {this.handleUnvote(key, uid)} }
                                                    deletePoll={()=> {this.deletePoll(key, uid)} }
                                                    uid={uid}
                                                    {...userPolls}
                                                />
                                            );
                                        })
                                    }
                                </GridList>
                            );

                        })
                    }
                </GridList>
            </div>
        )
    }
}
