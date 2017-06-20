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


export const Poll = ({pollKey, name, description, author, id, auth, pollUid, user, onDeletePoll, ...props}) => (
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
                    isTheCurrentUser(pollUid, auth.uid) ? <FlatButton label="Delete My Poll" onTouchTap={onDeletePoll}/> : null
                }
            </CardActions>

        </Card>
    </article>
);
