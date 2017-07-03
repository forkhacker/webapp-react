import * as types from './actionTypes';
import 'whatwg-fetch';
import * as challenge from '../api/challenge';
import * as loaderActions from './loaderActions';

export function challengesListSuccess(challenges) {
    return {
        type : types.CHALLENGES_LIST_SUCCESS,
        challenges,
    };
}

export function listChallenges() {
    return async dispatch => {
        // dispatch(loaderActions.show());
        const challenges = await challenge.list();
        console.log(challenges);
        debugger;
        dispatch(challengesListSuccess(challenges));
        // return dispatch(loaderActions.hide());
    };
}
