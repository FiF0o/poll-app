/**
 * Created by jonlazarini on 27/04/17.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Vote from './Vote'

import map from 'lodash/map';


export const CardExampleWithAvatar = ({ name, displayName, handleVote, handleUnvote, ...props}) => {
    // console.log('PROPS', {...props})
    const { votes, photoURL, uid } = props; // gets votes node from destructured item in parent component
    const userHasVoted = votes && Object.keys(votes).includes(uid); // votes exists and checks if there is a uid
    const toggleVote = userHasVoted ?
        <FlatButton label="Unvote" secondary={true} onTouchTap={handleUnvote} />
        :
        <FlatButton label="Vote" primary={true} onTouchTap={handleVote} />;

        return (
            <Card>
                <CardHeader
                    title={displayName}
                    subtitle={props.uid}
                    avatar={props.photoURL}
                />

                <CardTitle title={name} subtitle={props.email} />
                <CardText>
                    {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                    {/*Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.*/}
                    {/*Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.*/}
                    {/*Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.*/}
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
                    <FlatButton style={{float: 'right'}}  label="Delete My Poll" onTouchTap={props.deletePoll} />
                </CardActions>
            </Card>
        );

};
