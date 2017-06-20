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
                <Avatar src={"https://placebear.com/100/100"} />
            }
        >
            {user}
            {/*user.displayName*/} - {/*user.email*/}
        </ListItem>
    </List>
);
