/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import { database, auth } from '../../database/firebase';

import Form from '../Form';
import SignIn from '../SignIn';
import UserProfile from '../UserProfile';
import Cards from '../Cards';

/**
 * "rules":{ ".read": "true" , ".write": "true"}
 */

// database.ref('/node').once('value').then((snapshot) => {
//     console.log(snapshot.key)
//     snapshot.forEach((childItem) => {
//         let cKey = childItem.key
//         let cData = childItem.val()
//         console.log(`${cKey} : ${cData}`)
//     })
// });

class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null, // gets all the data
            newData: null,
            hasLoaded: false,
            hasError: false,
            error: 'no error!',
            currentUser: null,
            polls: null
        };


        // stores data on the instance of the component for reading data - read/write
        this.dataRef = null;

    }

    componentDidMount() {

        //TODO Promisify or create a separate module for separation of concerns, Container should not care of data/error passed in
        auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });

        // reads from / in database
        this.dataRef = database.ref('/');
        try
        {
            /* debug error handling */
            // throw new Error('No bueno!');
            this.dataRef.on('value', ((snapshot) => {
                const data = snapshot.val();
                const polls = snapshot.child('polls').val()

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
            return <div className="poll-page poll-page-error">{ this.state.error }</div>
        }

        // avoids js runtime error returning this.state.data.null on fist render before and shows spinner in case
        if(this.state.data === null) return <CircularProgress size={60} thickness={7}/>

        const { currentUser, polls } = this.state;

        return (
            <section className="poll-page">
                <div className="poll-page poll-page-content">
                    <div className="">
                        <Form />
                        {
                            /* null or anonymous */
                            !currentUser || currentUser.isAnonymous ?
                                <SignIn />
                                :
                                <div>
                                    <Cards polls={ polls } currentUser={ currentUser }  />
                                    <UserProfile currentUser={ currentUser } />
                                </div>
                        }
                    </div>
                </div>
            </section>
        )
    }

}

export default Poll
