// Set up your root reducer here...
import {combineReducers} from 'redux';
import login from './loginReducer';
import loader from './loaderReducer';
import challenge from './challengeReducer';

const rootReducer = combineReducers({
    login,
    loader,
    challenge,
});

export default rootReducer;
