import {USER_SIGNUP_START, USER_SIGNUP_STOP} from '../actions/actions'
import { takeEvery } from 'redux-saga/effects'

import {userSignUpStart} from './user'

function* rootSaga(){
    yield takeEvery(USER_SIGNUP_START, userSignUpStart)
}

export default rootSaga;