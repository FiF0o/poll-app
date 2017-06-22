/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {UserAvatar} from '../Avatars';
// import {Votes} from '../Votes';

// import {getVotesForPoll} from '../../utils/PollUtils';
import {isTheCurrentUser} from '../../utils/UserAuth';


export const Poll = ({pollKey, name, description, author, id, auth, pollUid, user, onDeletePoll, addVote, removeVote, ...props}) => (
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
                <FlatButton label="Unvote" onTouchTap={removeVote} />
                <FlatButton label="Add Vote" onTouchTap={addVote} />
            </CardActions>

        </Card>
    </article>
);
