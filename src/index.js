import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {usersListeners} from './listeners';

store.dispatch(usersListeners());
injectTapEventPlugin();

/**
 * firebase-messaging has been disabled to prevent errors when testing
 * will cause issues when using FCM
 */
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
