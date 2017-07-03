import * as types from '../actions/actionTypes';
import intialState from './intialState';


export default function loginReducer(state = intialState.user, action) {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, action.user);
        case types.USER_LOGOUT:
            return Object.assign({}, action.user);
        case 'persist/REHYDRATE':
            return {...action.payload.login};
        default:
            return state;
    }
}
