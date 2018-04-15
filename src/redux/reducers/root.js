import {combineReducers} from 'redux';

import userReducer from './userReducer'
import stringReducer from './stringReducer'
import dicianReducer from './dicianReducer'
import adminReducer from './adminReducer'

const rootReducer = {
    string : stringReducer,
    user : userReducer,
    dician : dicianReducer,
    admin : adminReducer
}

export default combineReducers(rootReducer);