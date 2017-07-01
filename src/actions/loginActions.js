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
            .then(login => {
                console.log(login);
                dispatch(userLoginSuccess(login));
            })
            .catch(console.log);
    };
}
