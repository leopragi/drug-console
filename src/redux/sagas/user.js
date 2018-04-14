import { put, call } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {userSignUpFinish, userLoginFinish, userCheckLoginStatusFinish, isEmailVerified, userSendVerificationMailStart, userReadQueriesFinish} from '../actions/actionCreators'
import {firebaseReadFromRef} from '../../utils'

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
        yield put(userCheckLoginStatusFinish(null))
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
        yield put(userLoginFinish(user))
    }
    catch(e){   
        console.log(e)        
        yield put(userLoginFinish(null))
    }
}

export function* userSignOut(action){
    try{
        yield call([auth, auth.signOut])
    }catch(e){
        console.log(e)        
    }
}

export function* userReadQueriesStart(action){
    let userId = action.payload;
    try{
        var queryRef = database.ref('/queries').orderByChild('allocation/admin').equalTo(userId);
        var queries = yield call(firebaseReadFromRef, queryRef);
        yield put(userReadQueriesFinish(queries))
    }
    catch(e){   
        console.log(e)        
    }
}