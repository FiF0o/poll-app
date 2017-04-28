/**
 * Created by jonlazarini on 27/04/17.
 */
import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 480,
        height: 'auto',
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'http://placehold.it/640x640',
        title: 'Breakfast',
        author: 'jill111',
        titlePosition: 'top'
    },
    {
        img: 'http://placehold.it/641x640',
        title: 'Tasty burger',
        author: 'pashminu',
        titlePosition: 'top'
    },
    {
        img: 'http://placehold.it/642x640',
        title: 'Tasty',
        author: 'painu',
        fullBleed: true,
        titlePosition: 'bottom'
    },
    {
        img: 'http://placehold.it/1280x640',
        title: 'Tasty',
        author: 'painu',
        fullBleed: true,
        titlePosition: 'bottom'
    },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridsExmple = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    cols={ tile.fullBleed ? 2 : 1 }
                    rows={ tile.fullBleed ? 2 : 1 }
                    titlePosition={ tile.titlePosition ? tile.titlePosition : 'bottom' }
                >
                    <img
                        src={tile.img}
                        alt={tile.img}
                    />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridsExmple;