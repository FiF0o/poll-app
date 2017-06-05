/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import map from 'lodash/map';
import {Poll} from './Poll';
import {Grid} from '../Grids/';

export const Polls = ({polls, users, deletePoll, auth, addVote, removeVote, votes, ...props}) => (
    <Grid
        cellHeight={'auto'}
        cols={2}
        padding={50}
    >
        {
            map(polls, (poll, key) => (
                <Poll
                    key={key}
                    name={poll.name}
                    description={poll.description}
                    user={users[poll.uid]}
                    auth={auth}
                    {...poll}
                    onDeletePoll={deletePoll(key)}
                    votes={votes}
                    addVote={addVote}
                    removeVote={removeVote}
                    pollId={key}
                />
            ))
        }
    </Grid>
);
