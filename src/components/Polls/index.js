/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import { map }from 'lodash';
import {Poll} from './Poll';
import {Grid} from '../Grids/';

export const Polls = ({polls, auth, users, deletePoll, ...props}) => {
    return (
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
                        user={users.byId[poll.uid]}
                        {...poll}
                        onDeletePoll={deletePoll(poll.id)}
                        key={key}
                    />
                ))
            }
            {/* quick ugly fix to get data and debug - user={users.byId[poll.uid]} */ }
        </Grid>
    );
}
