/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {UserAvatar} from '../Avatars';
// import {isTheCurrentUser} from '../../utils/UserAuth';

export const Poll = ({name, description, onClick, user, ...props}) => (
    <article>
        <UserAvatar user={user} />
        <Card>
            <CardTitle title={name} />
            <CardText>
                <b>Description:</b><br/>
                { description }<br/><br/>
                <b>Voters:</b><br/>
            </CardText>
            <CardActions>
                <FlatButton label="Unvote" secondary={true} onTouchTap={onClick()} />
                <FlatButton label="Delete My Poll" onTouchTap={onClick()} />
            </CardActions>
        </Card>
    </article>
);

// export const CardExampleWithAvatar = ({ name, handleVote, handleUnvote, ...props}) => {
//     const { votes, uid } = props; // gets votes node from destructured item in parent component
//     const userHasVoted = votes && Object.keys(votes).includes(uid); // votes exists and checks if there is a uid
//     const toggleVote = userHasVoted ?
//         <FlatButton label="Unvote" secondary={true} onTouchTap={handleUnvote} />
//         :
//         <FlatButton label="Vote" primary={true} onTouchTap={handleVote} />;
//
//     return (
//         <Card>
//             <CardTitle title={name} />
//             <CardText>
//                 <b>Description:</b><br/>
//                 { props.description }<br/><br/>
//                 <b>Voters:</b><br/>
//                 {
//                     votes && map(votes, (vote, key) => (
//                             <Vote key={key}
//                                   children={vote}
//                                   handleUnvote={handleUnvote}
//                                   {...props}
//                             />
//                         )
//                     )
//                 }
//             </CardText>
//             <CardActions>
//                 { toggleVote }
//                 {isTheCurrentUser(props.userRef, uid) && <FlatButton style={{float: 'right'}} label="Delete My Poll" onTouchTap={props.deletePoll} />}
//             </CardActions>
//         </Card>
//     );
//
// };