/**
 * Created by jonlazarini on 27/04/17.
 */
import React, { Component } from 'react';

import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import map from 'lodash/map';

import { CardExampleWithAvatar as Card } from './Card';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width:'960px',
        height: 'auto'
    }
};

export default class Cards extends Component {

    render() {

        const { polls, currentUser } = this.props;

        return (
            <div style={styles.root} >
                <GridList
                    style={styles.gridList}
                    cellHeight={styles.gridList.height}
                    padding={10}
                    cols={2}
                >
                    <Subheader><b>Polls</b></Subheader>
                     {/* can also use the classic map sythax */}
                     {
                         map(polls, (poll, key) => (
                             <Card key={ key }
                                   name={ poll.name }
                                   displayName={currentUser.displayName}
                                   {...polls}
                                   {...currentUser}
                             />
                         ))
                     }
                </GridList>
            </div>
        )
    }
}
