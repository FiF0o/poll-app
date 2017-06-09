/**
 * Created by jonlazarini on 28/04/17.
 */
import React from 'react';
import Chip from 'material-ui/Chip';

import {styles} from './styles';

// export default class Vote extends React.Component {
//
//     render() {
//         const { children, handleUnvote } = this.props;
//         return (
//             <div style={styles.wrapper}>
//
//                 <Chip
//                     onRequestDelete={handleUnvote}
//                     style={styles.chip}
//                 >
//                     {children}
//                 </Chip>
//
//             </div>
//         );
//     }
// }

export const Vote = ({name, removeVote}) => {
    return(
        <div style={styles.wrapper}>
            <Chip
                 onRequestDelete={removeVote()}
                 style={styles.chip}
            >
                {name}
            </Chip>

        </div>
    );
}