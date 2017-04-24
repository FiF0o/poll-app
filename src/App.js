import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <NewButton/>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

const DebugButton = ({...props}) => {
    // console.log({...props})
    return ( <FlatButton label="Default" primary={props.primary}/> )
};

const NewButton = () => ( <DebugButton primary={true} /> )


export default App;
