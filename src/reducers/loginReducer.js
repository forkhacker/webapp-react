import * as types from '../actions/actionTypes';
import intialState from './intialState';


export default function loginReducer(state = intialState.user, action) {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, action.user);
        case 'persist/REHYDRATE':
            debugger;
            return {...state, persistedState : action.payload}
        default:
            return state;
    }
}
