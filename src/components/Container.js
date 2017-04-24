/**
 * Created by jonlazarini on 24/04/17.
 */
import React from 'react';
import { Route } from 'react-router-dom';
import { Nav } from './Nav';

import Poll from './Poll';
import Page2 from './Page2'

const routes = [
    {
        path: '/',
        exact: true,
        // nav: () => <Nav />,
        main: () => <Poll />
    },
]

export const Container = (props) => (
    <div>
        <Nav/>
        {/** Renders home page - use map in case we need to render routes elements in several places **/}
        <div>
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
        </div>
    </div>
)
