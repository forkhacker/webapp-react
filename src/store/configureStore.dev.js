import {createStore, applyMiddleware} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import localForage from 'localforage';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'remote-redux-devtools';


export default function configureStore(intialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;
    const store =  createStore(
        rootReducer,
        intialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()), autoRehydrate())
    );

    persistStore(store,{whitelist : ['login']});
    return store;
}
