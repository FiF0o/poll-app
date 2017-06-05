/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {UserAvatar} from '../Avatars';
import {Votes} from '../Votes';

import {getVotesForPoll} from '../../utils/PollUtils';
import {isTheCurrentUser} from '../../utils/UserAuth';


export const Poll = ({name, description, onDeletePoll, user, auth, votes, addVote, removeVote, pollId, ...props}) => (
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
                    isTheCurrentUser(user, auth.uid) ? <FlatButton label="Delete My Poll" onTouchTap={onDeletePoll}/> : null
                }
            </CardActions>
            {/* votes is hold by polls - TODO Refactor votes container to hold votes... */}
            <Votes
                votes={getVotesForPoll(votes, pollId)}
                addVote={addVote}
                removeVote={removeVote}
                pollId={pollId}
                auth={auth}
            />
        </Card>
    </article>
);
