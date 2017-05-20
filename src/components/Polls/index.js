/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import map from 'lodash/map';
import {Poll} from './Poll';
import Subheader from 'material-ui/Subheader';

export const Polls = ({polls, users, ...props}) => (
    <div>
        <Subheader><b>Polls</b></Subheader>
        {
            map(polls, (poll, key) => (
                <Poll
                    key={key}
                    name={poll.name}
                    description={poll.description}
                    user={users[poll.uid]}
                    {...poll}
                    onClick={props.onClickBtn}
                />
            ))
        }
    </div>
);
