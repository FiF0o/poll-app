/**
 * Created by jonlazarini on 27/04/17.
 */
import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Vote from './Vote'

import map from 'lodash/map';

import {hasVoted} from '../utils/VoteMethods';
import {isTheCurrentUser} from '../utils/UserAuth';


export const CardExampleWithAvatar = ({ name, handleVote, handleUnvote, ...props}) => {

    const { votes, photoURL, uid } = props;

    const toggleVote = hasVoted(votes, uid) ?
        <FlatButton label="Unvote" secondary={true} onTouchTap={handleUnvote} />
        :
        <FlatButton label="Vote" primary={true} onTouchTap={handleVote} />;

        return (
            <Card>
                {/*<CardHeader*/}
                    {/*title={props.displayName}*/}
                    {/*email={props.email}*/}
                    {/*subtitle={props.uid}*/}
                    {/*avatar={props.photoURL}*/}
                {/*/>*/}

                <CardTitle title={name} />
                <CardText>
                    <b>Description:</b><br/>
                    { props.description }<br/><br/>
                    <b>Voters:</b><br/>
                    {
                        votes && map(votes, (vote, key) => (
                            <Vote key={key}
                                  children={vote}
                                  photoUrl={photoURL}
                                  handleUnvote={handleUnvote}
                                  {...props}
                            />
                            )
                        )
                    }
                </CardText>
                <CardActions>
                    { toggleVote }
                    {
                        isTheCurrentUser(props.currentUser, uid) &&
                        <FlatButton style={{float: 'right'}}
                                    label="Delete My Poll"
                                    onTouchTap={props.deletePoll}
                        />
                    }
                </CardActions>
            </Card>
        );

};
