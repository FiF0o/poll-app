import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

import {usersListeners} from './listeners';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  thunk
];

let store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

store.dispatch(usersListeners());


injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
