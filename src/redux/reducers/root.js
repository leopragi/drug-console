import {combineReducers} from 'redux';

import userReducer from './userReducer'
import stringReducer from './stringReducer'

const rootReducer = {
    string : stringReducer,
    user : userReducer
}

export default combineReducers(rootReducer);