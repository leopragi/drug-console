import { put, call } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {adminReadAllUserFinish,adminReadNonendUsersFinish } from '../actions/actionCreators'
import {firebaseReadFromRef} from '../../utils'



export function* adminReadAllUserStart(){
    try{
        var users = database.ref('/users');
        var users = yield call(firebaseReadFromRef, users);
        yield put(adminReadAllUserFinish(users))
    }
    catch(e){   
        yield put(adminReadAllUserFinish(null))
    }
}

export function* adminReadAllStoriesStart(){
    try{
        
    }
    catch(error){

    }
}

export function* adminReadAllTeamsStart(){
    try{

    }
    catch(error){
        
    }
}

export function* adminReadNonendUsersStart(){
    try{
        var usersRef = database.ref('/users').orderByChild('endUser').equalTo(null);
        var users = yield call(firebaseReadFromRef, usersRef);
        console.log(users);
        yield put(adminReadNonendUsersFinish(users));
    }
    catch(error){
        yield put(adminReadNonendUsersFinish(error));
    }
}