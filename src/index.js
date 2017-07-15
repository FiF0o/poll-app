import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Provider } from 'react-redux';

import {store} from './store';
import ApplicationContainer from './containers/ApplicationContainer';
import './index.css';
// import intializers from './initializers'
import { ListeningToAuthChanges, ListeningToPolls, ListeningForUsers, ListeningToVotes } from './utils/listeners/';
import registerServiceWorker from './registerServiceWorker';

// intializers.forEach(intializer => intializer(store));


store.dispatch(ListeningToAuthChanges());
store.dispatch(ListeningToPolls());
store.dispatch(ListeningForUsers());
store.dispatch(ListeningToVotes());

const parentComponent =
    <MuiThemeProvider>
        <Provider store={store} >
            {/* contains Router, Routes */}
            <ApplicationContainer />
        </Provider>
    </MuiThemeProvider>;

const root = document.getElementById('root');

ReactDOM.render(
    parentComponent,
    root
);
registerServiceWorker();