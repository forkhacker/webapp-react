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
export function challengesGetSuccess(challengeData) {
    return {
        type : types.CHALLENGES_GET_SUCCESS,
        challenge: challengeData,
    };
}

export function listChallenges() {
    return async dispatch => {
        // dispatch(loaderActions.show());
        const challenges = await challenge.list();
        console.log(challenges);
        dispatch(challengesListSuccess(challenges));
        // return dispatch(loaderActions.hide());
    };
}

export function getChallenge(id) {
    return async dispatch => {
        const challengeData = await challenge.get(id);
        console.log(challengeData);
        dispatch(challengesGetSuccess(challengeData));
    };
}
