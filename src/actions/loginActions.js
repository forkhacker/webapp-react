import * as types from './actionTypes';
import 'whatwg-fetch';

export function userLoginSuccess(user) {
    return {
        type : types.USER_LOGIN_SUCCESS,
        user
    };
}

export function loginUser(url) {
    return dispatch => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error(response.statusText);
                }

                return response;
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                dispatch(userLoginSuccess(response));
            })
            .catch(()=> {throw Error("API failed")});
    };
};
