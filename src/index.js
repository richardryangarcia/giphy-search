import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//store
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createHashHistory} from 'history';

//middleware
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

//tools
import {composeWithDevTools} from 'redux-devtools-extension'

import Router from './router';
import reducers from './redux/reducers';
// import sagas from './redux/sagas';

// create store with middlewares
const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];
const store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)));

// sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
