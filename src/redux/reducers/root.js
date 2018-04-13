import {combineReducers} from 'redux';

import userReducer from './userReducer'
import stringReducer from './stringReducer'
import queryReducer from './queryReducer'

const rootReducer = {
    string : stringReducer,
    user : userReducer,
    query : queryReducer
}

export default combineReducers(rootReducer);