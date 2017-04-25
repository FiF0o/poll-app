/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';

import { database } from '../../database/firebase';

import { NewButton } from '../Button';

/**
 * "rules":{ ".read": "true" , ".write": "true"}
 */
try {
    // debug - gets /hello node
    database.ref('/').child('/hello').on('value', (snapshot) => {
        console.log('ON - hello node: ', snapshot.val());
    });
}
catch(err) {
    console.log(err)
}


class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            newData: null
        }

    }

    componentDidMount() {

        database.ref('/').once('value')
            .then((snapshot) => {
            const data = snapshot.val()
                this.setState({data})
                console.log('STATE:', this.state)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {

        return(
            <section className="poll-page">
                <NewButton />
                { JSON.stringify(this.state.data, null, 2) }
            </section>
        )
    }

}

export default Poll
