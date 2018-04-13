import {USER_SIGNUP_START, USER_SIGNUP_FINISH, USER_LOGIN_START, USER_LOGIN_FINISH, USER_CHECK_LOGIN_STATUS_START, USER_CHECK_LOGIN_STATUS_FINISH } from './actions'

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