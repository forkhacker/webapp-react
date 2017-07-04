import * as types from './actionTypes';
import 'whatwg-fetch';
import login from '../api/auth';
import * as loaderActions from './loaderActions';


export function userLoginSuccess(user) {
    return {
        type : types.USER_LOGIN_SUCCESS,
        user,
    };
}

export function logoutUser() {
    return{
        type: types.USER_LOGOUT,
        user : {
            isLoggedIn : false
        }
    };
}

export function loginUser(code) {
    return async dispatch => {
        dispatch(loaderActions.show());
        const user = await login(code);
        user.isLoggedIn = true;
        dispatch(userLoginSuccess(user));
        return dispatch(loaderActions.hide());
    };
}


