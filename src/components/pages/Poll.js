/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import { database } from '../../database/firebase';

import Form from '../Form';
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
            newData: null,
            hasLoaded: false,
            hasError: false,
            error: 'no error!'
        }

    }

    componentDidMount() {
        database.ref('/').once('value')
            .then((snapshot) => {
                /* debug error handling */
                // throw new Error('No bueno!');
                const data = snapshot.val();

                this.setState({
                    data: data,
                    hasLoaded: !this.state.hasLoaded
                });
            })
            .catch((err) => {
                console.error(err)

                this.setState({
                    hasError: !this.state.hasLoaded,
                    error: err.message
                });
            });
    }

    render() {

        // const { hello } = this.state.data
        // console.log(hello)

        if(this.state.hasError) {
            return (
                <div className="poll-page poll-page-error">{ this.state.error }</div>
            )
        }

        return (
            <section className="poll-page">
                <div className="poll-page poll-page-content">
                    {
                        !this.state.hasLoaded ?
                            <CircularProgress size={60} thickness={7}/>
                       :
                            <div className="">
                                <Form />
                                { JSON.stringify(this.state.data, null, 2) }
                                <NewButton />
                            </div>
                    }
                </div>
            </section>
        )
    }

}

export default Poll
