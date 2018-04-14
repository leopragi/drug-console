import {USER_SIGNUP_START, USER_SIGNUP_FINISH, 
    USER_LOGIN_START, USER_SIGN_OUT, ADMIN_GET_ALL_USER_FINISH,
    USER_LOGIN_FINISH, USER_CHECK_LOGIN_STATUS_START, ADMIN_GET_ALL_USERS_START,
    USER_CHECK_LOGIN_STATUS_FINISH, USER_SEND_VERIFICATION_MAIL_START, USER_SEND_VERIFICATION_MAIL_FINSIH, USER_READ_QUERY_FINISH, USER_READ_QUERY_START } from './actions'

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

export function adminReadAllUserStart(){
    return {
        type : ADMIN_GET_ALL_USERS_START
    }
}

export function adminReadAllUserFinish(users){
    return {
        type : ADMIN_GET_ALL_USER_FINISH,
        payload : users
    }
}