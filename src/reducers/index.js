// Set up your root reducer here...
import {combineReducers} from 'redux';
import login from './loginReducer';
import loader from './loaderReducer';

const rootReducer = combineReducers({
    login,
    loader
});

export default rootReducer;
