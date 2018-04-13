import {USER_SEND_VERIFICATION_MAIL_START, USER_SIGNUP_START, USER_LOGIN_START, USER_CHECK_LOGIN_STATUS_START, USER_SIGN_OUT, USER_READ_QUERY_START,} from '../actions/actions'
import { takeEvery } from 'redux-saga/effects'

import {userSignUpStart, userLoginStart,userSendVerificationMailStartRedux, userCheckLoginStatusStart, userSignOut, userReadQueriesStart, } from './user'

function* rootSaga(){
    yield takeEvery(USER_SIGNUP_START, userSignUpStart)
    yield takeEvery(USER_CHECK_LOGIN_STATUS_START, userCheckLoginStatusStart)
    yield takeEvery(USER_LOGIN_START, userLoginStart)
    yield takeEvery(USER_SIGN_OUT, userSignOut)
    yield takeEvery(USER_SEND_VERIFICATION_MAIL_START, userSendVerificationMailStartRedux)
    yield takeEvery(USER_READ_QUERY_START, userReadQueriesStart);
}

export default rootSaga;