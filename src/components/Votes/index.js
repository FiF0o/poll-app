/**
 * Created by jonlazarini on 31/05/17.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import map from 'lodash/map';
import {Vote} from './Vote';

//import {hasVoted} from '../../utils/VoteMethods';


export const Votes = ({votes, addVote, removeVote, pollId, auth, ...props}) => {

    return(
        <div style={{padding: '1em'}} >
            <br/>
            <b>Voters:</b>
            <br/>
            {
                map(votes, (v, i) => (
                    <Vote
                        key={i}
                        name={v.uid}
                        {...v}
                    />
                ))
            }
            <div>
                <FlatButton label="Unvote" secondary={true} onTouchTap={removeVote(pollId, auth.uid)} />
                <FlatButton label="Vote" secondary={true} onTouchTap={addVote} />
            </div>
        </div>
    );
};
