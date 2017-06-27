/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import { map }from 'lodash';
import {Poll} from './Poll';
import {Grid} from '../Grids/';

const getUserById = (arr, uid) => arr
    .filter(u => u.uid === uid) // or [0] instead of reduce overkill...
    .reduce((acc, o) => o, undefined);

export const Polls = ({polls, auth, users, deletePoll, addVote, removeVote, ...props}) => (
    <Grid
        cellHeight={'auto'}
        cols={2}
        padding={50}
    >
        {
            map(polls, (poll, key) => (
                <Poll
                    pollKey={key}
                    name={poll.name}
                    description={poll.description}
                    author={poll.author}
                    id={poll.id}
                    auth={auth}
                    pollUid={poll.uid}
                    user={getUserById(users, poll.uid)}
                    {...poll}
                    onDeletePoll={deletePoll(poll.id)}
                    addVote={addVote(poll.id, auth.uid)}
                    removeVote={removeVote}
                    key={key}
                />
                )
            )
        }
    </Grid>
);
