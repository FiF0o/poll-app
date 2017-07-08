/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

export const UserAvatar = ({user}) => (
    <List>
        <ListItem
            disabled={true}
            leftAvatar={
                <Avatar src={user.photoURL} />
            }
        >
            {user.displayName} - {user.email}
        </ListItem>
    </List>
);
