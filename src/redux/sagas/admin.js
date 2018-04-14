import { put, call } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {adminReadAllUserFinish } from '../actions/actionCreators'
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