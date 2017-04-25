/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Nav } from './Nav';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import Poll from '../pages/Poll';
import Page2 from '../pages/Page2';

const routes = [
    {
        path: '/',
        exact: true,
        // nav: () => <Nav />,
        main: () => <Poll />
    },
]

export default class Container extends Component {

    constructor(props) {

        super(props);
        this.state = { open:false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        return (
            <div className="container">
                {/** Renders home page - use map in case we need to render routes elements in several places **/}
                <section className="container container-menu">
                    <RaisedButton
                        label="Open Drawer"
                        onTouchTap={this.handleToggle}
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

                <section className="container container-section">
                    {
                        routes.map((route, index) => (
                            <Route
                                key={ index }
                                path={ route.path }
                                exact={ route.exact }
                                component={ route.main }
                            />)
                        )
                    }
                    {/* debug route for another page */}
                    <Route
                        path='/page2'
                        component={ () => <Page2 /> }
                    />

                </section>

            </div>
        )
    }
}
