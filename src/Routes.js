/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import SignIn from './components/SignIn/SignIn';
import { Home } from './components/pages/Home';
import { Nav } from './components/Nav/Nav';
import PollPage from './components/pages/PollPage';



export default class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: false})
    }

    // componentDidMount() {
    //     auth.onAuthStateChanged((currentUser) => {
    //         //TODO Hack... Why state is not synchronized - initial state render with currentUser === null...
    //         //TODO user has always a scope of null, can we get pass it in auth() ?
    //         // Signing Out user and resetting state...
    //         if (currentUser === null)
    //         {
    //             this.setState({currentUser: null});
    //
    //         }// user is logged in, we store it in the DB
    //         else if (currentUser.email !== null || !currentUser.isAnonymous)
    //         {
    //             this.setState({currentUser});
    //             this.usersRef = database.ref('/users');
    //             this.currentUserRef = this.usersRef.child(currentUser.uid);
    //
    //             this.currentUserRef.once('value')
    //                 .then((snapshot) => {
    //                     const existingUser = snapshot.val();
    //                     if (existingUser) return;
    //                     const newUser = pick(currentUser,['displayName', 'photoURL', 'email', 'uid']);
    //                     this.currentUserRef.set(newUser);
    //                 })
    //                 .catch((err) => console.error(err));
    //
    //             this.usersRef.on('value', (snapshot) => {
    //                 const users = snapshot.val();
    //                 this.setState({users});
    //             });
    //         }
    //
    //
    //     });
    // }

    render() {

        // used in case we needed to render components on several places
        const routes = [
            {
                path: '/',
                exact: true,
                // nav: () => <Nav />,
                main: () => <Home />
            }
        ];


        return (
            <div className="container">
                <section className="container container-menu">
                    <AppBar
                        title={`Po' Poll`}
                        onLeftIconButtonTouchTap={this.handleToggle}
                        iconElementRight={ <SignIn /> }
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
                        component={ () => <PollPage /> }

                    />

                    <Route
                        path='/profile'
                        component={ () => <div>User profile</div> }
                    />

                </section>
            </div>
        )
    }
}
