/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import pick from 'lodash/pick';

import SignIn from '../SignIn';
import UserProfile from '../UserProfile';

import { Home } from '../pages/Home';
import Poll from '../pages/Poll';
import Page2 from '../pages/Page2';
import { Nav } from './Nav';

import { auth, database } from '../../database/firebase';


const routes = [
    {
        path: '/',
        exact: true,
        // nav: () => <Nav />,
        main: () => <Home />
    }
];

export default class Container extends Component {

    constructor(props) {

        super(props);
        this.state = {
            open:false,
            currentUser: null,
            users: {}
        };

        this.currentUserRef = null;
        this.usersRef = null;

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: false})
    }

    componentDidMount() {
        //TODO Bug fix when sign out... Works with simple setState
        auth.onAuthStateChanged((currentUser) => {
            // user is logged in
            if (currentUser.email !== null || !currentUser.isAnonymous) {
                this.setState({currentUser});
                this.usersRef = database.ref('/users');
                this.currentUserRef = this.usersRef.child(currentUser.uid);

                this.currentUserRef.once('value')
                    .then((snapshot) => {
                        const existingUser = snapshot.val();
                        if (existingUser) return;
                        const newUser = pick(currentUser,['displayName', 'photoURL', 'email', 'uid']);
                        this.currentUserRef.set(newUser);
                    })
                    .catch((err) => console.error(err));

                this.usersRef.on('value', (snapshot) => {
                    const users = snapshot.val();
                    this.setState({users});
                });
            }

        });
    }

    render() {

        const { currentUser } = this.state;

        return (
            <div className="container">
                {/** Renders home page - use map in case we need to render routes elements in several places **/}
                <section className="container container-menu">
                    <AppBar
                        title='Po-Poll'
                        onLeftIconButtonTouchTap={this.handleToggle}
                        iconElementRight={ <SignIn currentUser={currentUser} /> }
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <Nav handleClose={ this.handleClose } />
                    </Drawer>
                </section>

                <section className='container container-section'>
                    {
                        routes.map((route, index) => (
                            <Route
                                key={ index }
                                path={ route.path }
                                exact={ route.exact }
                                component={ route.main }
                            />
                            )
                        )
                    }
                    {/* debug route for another page */}
                    <Route
                        path='/polls'
                        component={ () => <Poll
                            currentUser={currentUser}
                            exact={true}

                        /> }
                    />
                    <Route
                        path='/profile'
                        component={ () => <UserProfile currentUser={currentUser} /> }
                    />
                    <Route
                        path='/page2'
                        component={ () => <Page2 /> }
                    />

                </section>

            </div>
        )
    }
}
