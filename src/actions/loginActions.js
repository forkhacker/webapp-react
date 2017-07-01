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
    return dispatch => {
        login(code)
            .then(user => {
                console.log(user);
                dispatch(userLoginSuccess(user));
            })
            .catch(console.log);
    };
}
