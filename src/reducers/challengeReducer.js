import * as types from '../actions/actionTypes';
import intialState from './intialState';


export default function challengeReducer(state = intialState.challenge, action) {
    switch (action.type) {
        case types.CHALLENGES_LIST_SUCCESS:
            return {...state, list: action.challenges};
        case types.CHALLENGES_GET_SUCCESS:
            return {...state, current: action.challenges};
        default:
            return state;
    }
}
