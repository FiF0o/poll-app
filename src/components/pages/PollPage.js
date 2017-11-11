/**
 * Created by jonlazarini on 20/05/17.
 */
import React, { Component } from 'react';

import NewPollContainer from '../../containers/NewPollContainer'
import PollsContainer from '../../containers/PollsContainer'


export default class PollPage extends Component {

    render() {

        return(
            <section>
                <NewPollContainer />
                <PollsContainer />
            </section>
        );
    }
}