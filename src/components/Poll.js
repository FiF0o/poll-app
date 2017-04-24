/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';

import { NewButton } from './Button';


class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            newData: null
        }
    }

    componentDidMount() {

    }

    render() {

        return(
            <div>
                <NewButton />
            </div>
        )
    }

}

export default Poll
