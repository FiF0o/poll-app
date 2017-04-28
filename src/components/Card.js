/**
 * Created by jonlazarini on 27/04/17.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const CardExampleWithAvatar = ({ name, displayName, ...props}) => {
    // console.log({...props})
    return (
        <Card>
            <CardHeader
                title={displayName}
                subtitle={props.uid}
                avatar={props.photoURL}
            />

            <CardTitle title={name} subtitle={props.email} />
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>
        </Card>
    );
};
