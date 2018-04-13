import {combineReducers} from 'redux';

import userReducer from './userReducer'
import stringReducer from './stringReducer'
import queryReducer from './queryReducer'

const rootReducer = {
    string : stringReducer,
    user : userReducer,
    queries : queryReducer
}

export default combineReducers(rootReducer);