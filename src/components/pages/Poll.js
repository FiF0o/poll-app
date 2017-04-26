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

        // stores data on the instance of the component for reading data - read/write
        this.dataRef = null;

    }

    componentDidMount() {

        // reads from / in database
        this.dataRef = database.ref('/');
        try
        {
            /* debug error handling */
            // throw new Error('No bueno!');
            this.dataRef.on('value', ((snapshot) => {
                const data = snapshot.val();

                this.setState({
                    data: data,
                    hasLoaded: !this.state.hasLoaded
                });
            }))
        }
        catch(err)
        {
            console.error(err);
            this.setState({
                hasError: !this.state.hasError,
                error: err.message
            });

        }
    }

    render() {

        if(this.state.hasError) {
            return <div className="poll-page poll-page-error">{ this.state.error }</div>
        }

        // avoids js runtime error returning this.state.data.null on fist render before and shows spinner in case
        if(this.state.data === null) return <CircularProgress size={60} thickness={7}/>
        const { world } = this.state.data

        return (
            <section className="poll-page">
                <div className="poll-page poll-page-content">
                    <div className="">
                        <Form />
                        { JSON.stringify(this.state.data, null, 2) }
                        <NewButton />
                    </div>
                    <div>hello {world}</div>
                </div>
            </section>
        )
    }

}

export default Poll
