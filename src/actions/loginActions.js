import * as types from './actionTypes';
import 'whatwg-fetch';
import login from '../api/auth';

export function userLoginSuccess(user) {
    return {
        type : types.USER_LOGIN_SUCCESS,
        user
    };
}

export function loginUser(code) {
    return async dispatch => {
        const user = await login(code)
        user.isLoggedIn = true;
        return dispatch(userLoginSuccess(user));
    };
}
