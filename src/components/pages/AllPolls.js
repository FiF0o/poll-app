/**
 * Created by jonlazarini on 04/05/17.
 */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import map from 'lodash/map';

import { database } from '../../database/firebase';
import { isUserLogged } from '../../utils/UserAuth';


export default class AllPolls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loggedUser: props.currentUser,
            // clear warning and control when component has mounted and trigger the setState only when mounted
            _isMounted: false,
        };
          this.dataRef  = database.ref('/users');
    }

    componentDidMount() {
        this.dataRef
            .on('value', (snapshot) => {
                const val = snapshot.val();
                // clears console warning as we still have a reference on component
                // when doing the async call :( only setState when component is first rendered....
                if (!this.state._isMounted) {
                    this.setState({
                        data: val,
                        _isMounted: true
                    });
                }
            });
    }

    componentWillUnmount() {
        // clears state
        this.setState({_isMounted: false})
    }

    render() {

        const { data, loggedUser, _isMounted } = this.state;

        if(this.state.data == null) return <CircularProgress size={60} thickness={7} />

        return(
            <section>
                <div>
                    {
                        // clears console warning as we still have a reference on component when doing the async call :( ....
                        _isMounted &&
                        // user has logged in
                        isUserLogged(loggedUser) &&
                        <div>
                            {
                                map(data, (poll, key) => {
                                    return (
                                        <div key={key}>
                                            <p>{poll.displayName}</p>
                                            {
                                            map(poll.polls, (item, key) => {
                                                return (
                                                    <div key={key} >
                                                        <p>{item.name}</p>
                                                        <p>{item.description}</p>
                                                        <div>
                                                            {
                                                                map(item.votes, (vote, key) => {
                                                                    return (
                                                                        <div key={key}>
                                                                            <p>key:{key}  vote:{vote}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    }
                </div>
            </section>
        );
    };
}
