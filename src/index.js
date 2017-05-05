import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { messaging } from './database/firebase';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/**
 * Debugging service workers
 */
messaging.onMessage((payload) => {
    console.log('debugged payload in browser: ', payload);
});
