import {USER_SIGNUP_START, USER_LOGIN_START, USER_CHECK_LOGIN_STATUS_START, USER_SIGN_OUT} from '../actions/actions'
import { takeEvery } from 'redux-saga/effects'

import {userSignUpStart, userLoginStart, userCheckLoginStatusStart, userSignOut} from './user'

function* rootSaga(){
    yield takeEvery(USER_SIGNUP_START, userSignUpStart)
    yield takeEvery(USER_CHECK_LOGIN_STATUS_START, userCheckLoginStatusStart)
    yield takeEvery(USER_LOGIN_START, userLoginStart)
    yield takeEvery(USER_SIGN_OUT, userSignOut)
}

export default rootSaga;