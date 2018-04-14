import {combineReducers} from 'redux';

import userReducer from './userReducer'
import stringReducer from './stringReducer'
import queryReducer from './queryReducer'
import adminReducer from './adminReducer'

const rootReducer = {
    string : stringReducer,
    user : userReducer,
    queries : queryReducer,
    admin : adminReducer
}

export default combineReducers(rootReducer);