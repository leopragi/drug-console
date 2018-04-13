import { put, call } from 'redux-saga/effects'
import { auth } from '../../config/firebase'

import {userSignUpFinish, userLoginFinish, userCheckLoginStatusFinish, isEmailVerified, userSendVerificationMailStart} from '../actions/actionCreators'

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
    try{
        let credentials = action.payload;
        var user = yield call([auth, auth.createUserWithEmailAndPassword], credentials.email, credentials.password)
        yield put(userSendVerificationMailStart(user))
        yield put(userSignUpFinish(user))
    }
    catch(e){
        console.log(e)
        yield put(userSignUpFinish(null))
    }
}


export function* userSendVerificationMailStartRedux(action){    
    try{
        let user = action.payload;
        if(!user.emailVerified){
             yield call([user, user.sendEmailVerification]);
        }
    } catch(error){
        console.log(error)
    }
}

export function* userLoginStart(action){
    try{
        let credentials = action.payload;
        var user = yield call([auth, auth.signInWithEmailAndPassword], credentials.email, credentials.password)
        var isVerified = yield call([user, user.isEmailVerified])
        if(!isVerified){
            
        } else {

        }
        yield put(userLoginFinish(user))
    }
    catch(e){   
        console.log(e)        
        yield put(userLoginFinish(null))
    }
}


