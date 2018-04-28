import {USER_SIGNUP_START, USER_SIGNUP_FINISH, 
    USER_LOGIN_START, USER_SIGN_OUT,
    USER_LOGIN_FINISH, USER_CHECK_LOGIN_STATUS_START, ADMIN_AUTHORIZE_DICIAN,
    USER_CHECK_LOGIN_STATUS_FINISH, USER_SEND_VERIFICATION_MAIL_START, USER_READ_SUBORDINATES_FINISH,
    USER_SEND_VERIFICATION_MAIL_FINSIH, USER_READ_QUERY_FINISH, USER_READ_QUERY_START,
    ADMIN_READ_ALL_STORIES_FINISH, ADMIN_READ_ALL_STORIES_START, ADMIN_READ_ALL_TEAMS_FINISH,
    ADMIN_READ_ALL_TEAMS_START, ADMIN_READ_NONEND_USERS_START, ADMIN_READ_NONEND_USERS_FINISH,
    USER_READ_SUBORDINATES_START, ALLOCATE_QUERY, ADMIN_REQUEST_EDIT_QUERY, USER_REQUEST_EDIT_QUERY } from './actions'
    
export function userSignUpStart(credentials){
    return{
        type: USER_SIGNUP_START,
        payload : credentials

    }
}

export function userSignUpFinish(user){
    return{
        type : USER_SIGNUP_FINISH,
        payload : user
    }
}

export function userLoginStart(credentials){
    return{
        type : USER_LOGIN_START,
        payload : credentials
    }
}

export function userLoginFinish(user){
    return{
        type : USER_LOGIN_FINISH,
        payload : user
    }
}

export function userCheckLoginStatusStart(){
    return{
        type: USER_CHECK_LOGIN_STATUS_START
    }
}

export function userCheckLoginStatusFinish(user){
    return{
        type: USER_CHECK_LOGIN_STATUS_FINISH ,
        payload : user
    }
}

export function userSignOut(){
    return {
        type : USER_SIGN_OUT
    }
}

export function userSendVerificationMailStart(user){    
    return{
        type: USER_SEND_VERIFICATION_MAIL_START,
        payload: user
    }
}

export function userReadQueriesStart(user){
    return{
        type: USER_READ_QUERY_START,
        payload : user
}
}

export function userReadQueriesFinish(queries){
    return{
        type: USER_READ_QUERY_FINISH,
        payload :queries
    }
}


export function userSendVerificationMailFinish(user){
    return{
        type: USER_SEND_VERIFICATION_MAIL_FINSIH,
        payload: user
    }
}

export function adminReadAllTeamsStart(){
    return {
        type : ADMIN_READ_ALL_TEAMS_START
    }
}

export function adminReadAllTeamsFinish(users){
    return {
        type : ADMIN_READ_ALL_TEAMS_FINISH,
        payload : users
    }
}
export function adminReadAllStoriesStart(){
    return {
        type : ADMIN_READ_ALL_STORIES_START
    }
}

export function adminReadAllStoriesFinish(users){
    return {
        type : ADMIN_READ_ALL_STORIES_FINISH,
        payload : users
    }
}

export function adminReadNonendUsersStart(){
    return {
        type : ADMIN_READ_NONEND_USERS_START
    }
}

export function adminReadNonendUsersFinish(users){
    return {
        type : ADMIN_READ_NONEND_USERS_FINISH,
        payload : users
    }
}
export function userReadSubordinatesStart(users){
    return {
        type : USER_READ_SUBORDINATES_START,
        payload : users
    }
}

export function userReadSubordinatesFinish(subordinates){
    return {
        type : USER_READ_SUBORDINATES_FINISH,
        payload : subordinates
    }
}

export function adminAuthorizeDician(uid){
    return {
        type : ADMIN_AUTHORIZE_DICIAN,
        payload : uid
    }
}

export function allocateQuery(uid, query, role){
    return{
        type : ALLOCATE_QUERY,
        payload :{ query, uid, role }
    }
}

export function adminRequestEditQuery(query){
    return{
        type : ADMIN_REQUEST_EDIT_QUERY,
        payload : query
    }
}

export function userRequestEditQuery(query){
    return{
        type : USER_REQUEST_EDIT_QUERY,
        payload : query
    }
}