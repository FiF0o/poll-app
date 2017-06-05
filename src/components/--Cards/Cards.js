/**
 * Created by jonlazarini on 27/04/17.
 */
import React, { Component } from 'react';

import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import map from 'lodash/map';
import { database } from '../../database/firebase';

import { CardExampleWithAvatar as Card } from './Card';

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
        this.handleVote = this.handleVote.bind(this);
        this.handleUnvote = this.handleUnvote.bind(this);
        this.deletePoll = this.deletePoll.bind(this);

        this.userRef = this.props.currentUser; // get user reference

        this.uid = this.userRef.uid;
        this.displayName = this.props.currentUser.displayName;
        this.pollRef = database.ref('polls');
    }

    deletePoll(key) {
        this.pollRef
            .child(key)
            .remove();

        database.ref(`/users/${this.uid}/polls/${key}`)
            .remove();
    }

    handleVote(vote) {
        /* finds a vote in the poll arr to assign an arr of votes
         * to cast a vote on his behalf
        */
        database.ref('/polls')
            .child(vote)
            .child('/votes')
            .child(this.uid)
            .set(this.displayName);

        // saves the new vote to the /users node
        database.ref(`/users/${this.uid}/polls/${vote}/votes/${this.uid}/`)
            .set(this.displayName);
    }

    handleUnvote(vote) {
        database.ref('/polls')
            .child(vote)
            .child('/votes')
            .child(this.uid)
            .remove();

        database.ref(`/users/${this.uid}/polls/${vote}/votes/${this.uid}/`)
            .remove();
    }


    render() {

        const { polls, currentUser } = this.props;

        return (
            <div style={styles.root} >
                <GridList
                    style={styles.gridList}
                    cellHeight={styles.gridList.height}
                    padding={10}
                    cols={2}
                >
                    <Subheader><b>Polls</b></Subheader>
                     {/* can also use the classic map sythax */}
                     {/* cast the vote handleVote with the key/node id,
                       needs an anonymous function to be passed a cb() otherwise function will be called instantaneously... */}
                    { polls === null  ?
                        <div>You have no poll available yet!</div>
                        :
                         map(polls, (singlePoll, key) => (
                             <Card key={ key }
                                   name={ singlePoll.name }
                                   handleVote={() => {this.handleVote(key)} }
                                   handleUnvote={() => {this.handleUnvote(key)} }
                                   displayName={currentUser.displayName}
                                   deletePoll={()=> {this.deletePoll(key)} }
                                   {...singlePoll}
                                   {...currentUser}
                                   userRef={currentUser}
                             />
                         ))


                    }
                </GridList>
            </div>
        )
    }
}
