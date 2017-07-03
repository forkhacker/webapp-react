import * as types from '../actions/actionTypes';
import intialState from './intialState';


export default function challengeReducer(state = intialState.challenges, action) {
    switch (action.type) {
        case types.CHALLENGES_LIST_SUCCESS:
            return [...state, ...action.challenges];
        default:
            return state;
    }
}
