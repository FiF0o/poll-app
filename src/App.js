import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AuthContainer from './containers/AuthContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AuthContainer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
