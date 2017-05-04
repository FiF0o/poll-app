/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import { database } from '../../database/firebase';

import Form from '../Form';
import Cards from '../Cards';

// import { getPolls } from '../../services/firebaseServices';

/**
 * "rules":{ ".read": "true" , ".write": "true"}
 */


class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null, // gets all the data
            hasLoaded: false,
            hasError: false,
            error: 'no error!',
            currentUser: this.props.currentUser, // gets currentUser prop from parent
            polls: null
        };

        // stores data on the instance of the component for reading data - read/write
        this.dataRef = null;

    }

    componentDidMount() {
    //TODO Promisify or create a separate module for separation of concerns, Container should not care of data/error passed in
        try
        {
            // reads from / in database
            this.dataRef = database.ref('/');

            /* debug error handling */
            // throw new Error('No bueno!');
            this.dataRef.on('value', ((snapshot) => {
                const data = snapshot.val();
                const polls = snapshot.child('polls').val();

                this.setState({
                    data: data,
                    polls: polls,
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
            return <div className="poll-page poll-page-error" style={{textAlign:'center'}} >{ this.state.error }</div>
        }

        // avoids js runtime error returning this.state.data.null on fist render before and shows spinner in case
        if(this.state.data === null) return <div style={{textAlign:'center'}}><CircularProgress size={60} thickness={7}/></div>;

        const { currentUser, polls } = this.state;

        return (
            <section className="poll-page">
                <div className="poll-page poll-page-content">
                    <div className="">
                        <Form currentUser={currentUser} />
                        {
                            /* null or anonymous */
                            !currentUser || currentUser.isAnonymous ?
                                <div style={{textAlign:'center', fontSize:'2em', padding:'1em'}} >Please login to access your polls</div>
                                :
                                <div>
                                    <Cards polls={ polls } currentUser={currentUser} />
                                </div>
                        }
                    </div>
                </div>
            </section>
        )
    }

}

export default Poll
