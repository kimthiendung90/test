import React from 'react';
import {render} from 'react-dom';
import Routes from './_ROOT/routes';

//Import redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
//import createLogger from 'redux-logger';
import allReducers from './_ROOT/reducers';

//const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise)
);

render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('root')
);