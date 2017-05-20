/**
 * Created by jonlazarini on 20/05/17.
 */
import React from 'react';

const Polls = (polls, ...props) => {
    console.log(polls, 'in component');
    return (
        <div>
            Polls
            <button>click me</button>
        </div>
    )
};

export default Polls