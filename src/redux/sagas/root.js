import {USER_SEND_VERIFICATION_MAIL_START, USER_SIGNUP_START,
    USER_LOGIN_START, USER_CHECK_LOGIN_STATUS_START, USER_SIGN_OUT,
    USER_READ_QUERY_START, ADMIN_GET_ALL_USERS_START,
    ADMIN_READ_ALL_STORIES_START,ADMIN_READ_ALL_TEAMS_START, ADMIN_READ_NONEND_USERS_START,
    USER_READ_ALL_SUBORDINATE_START} from '../actions/actions'
    
import { takeEvery } from 'redux-saga/effects'

import {userSignUpStart, userLoginStart, 
    userSendVerificationMailStartRedux, userCheckLoginStatusStart, 
    userSignOut, userReadQueriesStart, userReadAllSubordinateStart } from './user'
import {adminReadAllUserStart, adminReadAllStoriesStart, adminReadAllTeamsStart, 
    adminReadNonendUsersStart} from './admin'


function* rootSaga(){
    yield takeEvery(USER_SIGNUP_START, userSignUpStart)
    yield takeEvery(USER_CHECK_LOGIN_STATUS_START, userCheckLoginStatusStart)
    yield takeEvery(USER_LOGIN_START, userLoginStart)
    yield takeEvery(USER_SIGN_OUT, userSignOut)
    yield takeEvery(USER_SEND_VERIFICATION_MAIL_START, userSendVerificationMailStartRedux)
    yield takeEvery(USER_READ_QUERY_START, userReadQueriesStart);
    yield takeEvery(ADMIN_GET_ALL_USERS_START, adminReadAllUserStart);
    yield takeEvery(ADMIN_READ_ALL_STORIES_START, adminReadAllStoriesStart);
    yield takeEvery(ADMIN_READ_ALL_TEAMS_START, adminReadAllTeamsStart);
    yield takeEvery(ADMIN_READ_NONEND_USERS_START,adminReadNonendUsersStart);
    yield takeEvery(USER_READ_ALL_SUBORDINATE_START, userReadAllSubordinateStart);
}

export default rootSaga;