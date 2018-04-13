import { put, call } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {userSignUpFinish, userLoginFinish, userCheckLoginStatusFinish, isEmailVerified, userSendVerificationMailStart, userReadQueriesFinish} from '../actions/actionCreators'

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

function readQuery(ref){
    return new Promise((resolve, reject) => {
        ref.on('value', (snapshot) => {
            if(snapshot)
                return resolve(snapshot.val());
            else
                return reject(snapshot.val())
        })
    }) 
}
export function* userCheckLoginStatusStart(action){
    console.log(action)    
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
    try{
        var queryRef = database.ref('/queries');
        var queries = yield call(readQuery, queryRef);
        console.log(queries)
        yield put(userReadQueriesFinish(queries))
    }
    catch(e){   
        console.log(e)        
    }
}
