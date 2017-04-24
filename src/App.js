import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './App.css';
// import logo from './logo.svg';
import { Container } from './components/shell/Container';

/**
 *
 * Firebase
 * Functions
 * Permissions
 * Service Workers
 *
* */


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>
                <Container />
            </Router>
        </MuiThemeProvider>
    );
  }
}


export default App;
