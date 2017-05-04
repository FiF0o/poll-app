/**
 * Created by jonlazarini on 28/04/17.
 */
import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
// import FontIcon from 'material-ui/FontIcon';
// import SvgIconFace from 'material-ui/svg-icons/action/face';
// import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'inline-flex',
        flexWrap: 'wrap',
    }
};


export default class Vote extends React.Component {

    render() {
        const { children, handleUnvote } = this.props;
        return (
            <div style={styles.wrapper}>

                <Chip
                    onRequestDelete={handleUnvote}
                    style={styles.chip}
                >
                    {children}
                </Chip>

            </div>
        );
    }
}