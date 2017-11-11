/**
 * Created by jonlazarini on 04/07/17.
 */
/** Broadcast actions to other users **/
import pick from 'lodash/pick';
import { signedIn, signedOut } from '../../actions/auth';
import { addPoll, removePoll } from '../../actions/polls';
import { addUser } from '../../actions/users';
import { addVote, removeVote } from '../../actions/votes';
import { database, auth } from '../../database/firebase';
import {RequestMessagingPermissions} from '../RequestMessagingPermissions';

const pollsRef = database.ref('/polls');
const usersRef = database.ref('users');
const votesRef = database.ref('/votes');

export const ListeningToAuthChanges = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user.email !== null) {
                dispatch(signedIn(user));
                let u = pick(user, ['displayName', 'photoURL', 'email', 'uid']);
                usersRef.child(user.uid)
                    .set(u);

                RequestMessagingPermissions(user);

            } else {dispatch(signedOut())};
        });
    }
};

export const ListeningToPolls = () => {
    return (dispatch) => {
        pollsRef.on('child_added', (snapshot) => {
            dispatch(addPoll({...snapshot.val(), id: snapshot.key}));
        });

        pollsRef.on('child_changed', (snapshot) => {
            dispatch(addPoll({...snapshot.val(), id: snapshot.key}));
        });

        pollsRef.on('child_removed', (snapshot) => {
            dispatch(removePoll(snapshot.key));
        });
    }
};

export const ListeningForUsers = () => {
    return (dispatch) => {
        usersRef.on('child_added', (snapshot) => {
            dispatch(addUser(snapshot.val()));
        });
    };
};

export const ListeningToVotes = () => {
    return (dispatch) => {
        votesRef.on('child_added', (snap) => {
            const {pollId, uid} = snap.val();
            dispatch(addVote(pollId, uid, {voteId: snap.key}))
        });

        votesRef.on('child_changed', (snap) => {
            const {pollId, uid} = snap.val();
            dispatch(addVote(pollId, uid, {voteId: snap.key}))
        });

        votesRef.on('child_removed', (snap) => {
            const {pollId, uid} = snap.val();
            dispatch(removeVote(pollId, uid, {voteId: snap.key}))
        });
    }
};
