import {USER_SIGNUP_START, USER_SIGNUP_FINISH } from './actions'

export function userSignUpStart(){
    return{
        type: USER_SIGNUP_START

    }
}

export function userSignUpFinish(data){
    return{
        type : USER_SIGNUP_FINISH,
        payload : data
    }
}