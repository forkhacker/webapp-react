// Set up your root reducer here...
import {combineReducers} from 'redux';
import login from './loginReducer';
import loader from './loaderReducer';
import challenges from './challengeReducer';

const rootReducer = combineReducers({
    login,
    loader,
    challenges,
});

export default rootReducer;
