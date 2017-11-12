/**
 * Created by jonlazarini on 31/05/17.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import map from 'lodash/map';
import {Vote} from './Vote';
import { hasVoted } from '../../utils/VoteMethods';

const getVoteIdForUser = (voters, uid) => voters
    .filter((v) => v.uid === uid)
    .map((vote) => vote.voteId)[0];

export const Votes = ({voters, addVote, removeVote, pollId, auth, polls, ...props}) => (
    <div style={{padding: '1em'}} >
        <br/>
        <b>Voters:</b>
        <br/>
        {
            map(voters, (v, i) => (
                <Vote
                    key={v.voteId}
                    name={v.uid}
                    {...v}
                />
            ))
        }
        <div>
            {
                hasVoted(voters.map(u => u.uid), auth.uid) ?
                    <FlatButton label="Unvote" secondary={true} onTouchTap={removeVote(pollId, auth.uid, getVoteIdForUser(voters, auth.uid))} />
                    :
                    <FlatButton label="Vote" secondary={true} onTouchTap={addVote} />
            }
        </div>
    </div>
);