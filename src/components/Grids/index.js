/**
 * Created by jonlazarini on 03/06/17.
 */
import React from 'react';
import { GridList } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import {styles} from './styles';

export const Grid = ({title, cols, padding, cellHeight, children}) => (
    <div style={styles.root}>
        <Subheader><b>{title}</b></Subheader>
        <GridList
            style={styles.gridList}
            cellHeight={cellHeight}
            cols={cols}
            padding={padding}
        >
            {children}
        </GridList>
    </div>
);
