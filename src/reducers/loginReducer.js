import * as types from '../actions/actionTypes';
import intialState from './intialState';


export default function courseReducer(state = intialState.user, action) {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}
