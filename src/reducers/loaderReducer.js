import * as types from '../actions/actionTypes';
import intialState from './intialState';


export default function loaderReducer(state = intialState.loader, action) {
    switch (action.type) {
        case types.SHOW_LOADER:
            return action.loader;
        case types.HIDE_LOADER:
            return action.loader;
        default:
            return state;
    }
}
