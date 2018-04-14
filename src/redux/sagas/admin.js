import { put, call } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {adminReadAllUserFinish } from '../actions/actionCreators'

function readUsers(ref){
    return new Promise((resolve, reject) => {
        ref.on('value', (snapshot) => {
            if(snapshot)
                return resolve(snapshot.val());
            else
                return reject(snapshot.val())
        })
    }) 
}

export function* adminReadAllUserStart(){
    try{
        var users = database.ref('/users');
        var users = yield call(readUsers, users);
        yield put(adminReadAllUserFinish(users))
    }
    catch(e){   
        yield put(adminReadAllUserFinish(null))
    }
}