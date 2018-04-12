import { put, call } from 'redux-saga/effects'
import { auth } from '../../config/firebase'

import {userSignUpFinish} from '../actions/actionCreators'

function onAuthStateChanged(){
    return new Promise((resolve, reject) =>{
        auth.onAuthStateChanged(user =>{
            if(user){
                return resolve(user)
            }
            else{
                return reject(new Error("error !"))
            }
        });
    });
}

export function* userSignUpStart(action){
    try{
        var user = yield call(onAuthStateChanged)
        yield put(userSignUpFinish(user))
        console.log(user)
    }
    catch(e){
        console.log(e)
        yield put(userSignUpFinish(e))
    }
}

