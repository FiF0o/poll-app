/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {UserAvatar} from '../Avatars';
import {Votes} from '../Votes';

// import {getVotesForPoll} from '../../utils/PollUtils';
import {isTheCurrentUser} from '../../utils/UserAuth';


export const Poll = ({pollKey, name, description, author, id, auth, pollUid, user, onDeletePoll, addVote, removeVote, polls, ...props}) => (
    <article>
        <UserAvatar user={user} />
        <Card>
            <CardTitle title={name} />
            <CardText>
                <b>Description:</b><br/>
                { description }<br/><br/>
            </CardText>
            <CardActions>
                {
                    isTheCurrentUser(pollUid, auth.uid) ? <FlatButton label="Delete My Poll" onTouchTap={onDeletePoll} /> : null
                }
                {/*votes={props.votes}*/}
                <Votes
                    voters={props.voters}
                    addVote={addVote}
                    removeVote={removeVote}
                    pollId={id}
                    auth={auth}
                    polls={polls}
                />
            </CardActions>

        </Card>
    </article>
);
