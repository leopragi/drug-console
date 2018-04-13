import { put, call } from 'redux-saga/effects'
import { auth } from '../../config/firebase'

import {userSignUpFinish, userLoginFinish, userCheckLoginStatusFinish} from '../actions/actionCreators'

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

export function* userCheckLoginStatusStart(action){
    try{
        var user = yield call(onAuthStateChanged);
        yield put(userCheckLoginStatusFinish(user))
    }catch(error){
        yield put(userCheckLoginStatusFinish(error))
    }
}

export function* userSignUpStart(action){
    //console.log(action)
    try{
        // var user = yield call(onAuthStateChanged)
        let credentials = action.payload;
        var user = yield call([auth, auth.createUserWithEmailAndPassword], credentials.email, credentials.password)
        yield put(userSignUpFinish(user))
    }
    catch(e){
        console.log(e)
        yield put(userSignUpFinish(e))
    }
}

export function* userLoginStart(action){
    try{
        let credentials = action.payload;
        var user = yield call([auth, auth.signInWithEmailAndPassword], credentials.email, credentials.password)
        yield put(userLoginFinish(user))
    }
    catch(e){
        yield put(userLoginFinish(e))
    }
}


