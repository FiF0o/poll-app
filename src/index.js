import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

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

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();