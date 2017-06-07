/**
 * Created by jonlazarini on 04/05/17.
 */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import Form from '../--Form/Form';
import UserCards from '../UserCards';

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
            error: null,
            user: props.currentUser
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

        const { data, loggedUser, user, _isMounted } = this.state;

        if(this.state.data == null) return <CircularProgress size={60} thickness={7} />

        return(
            <section>
                { !isUserLogged(loggedUser) && <div>Please login to view the page</div> }
                <div>
                    {
                        // clears console warning as we still have a reference on component when doing the async call :( ....
                        _isMounted &&
                        // user has logged in
                        isUserLogged(loggedUser) &&
                        <section>
                            <Form currentUser={user} />
                            <UserCards currentUser={user}
                                       listPolls={ data }
                            />
                        </section>
                    }
                </div>
            </section>
        );
    };
}
