import { put, call, take, select } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {adminReadNonendUsersFinish } from '../actions/actionCreators'
import {createEventChannel, getSubordinateRole, getSuperiorRole} from '../../utils'
import { consolidateStreamedStyles } from 'styled-components';

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

export function* adminAuthorizeDician(action){
    const uid = action.payload;
    try {
        yield call((uid) => {
            const userRef = database.ref('/users').child(uid).child('authorized');
            return userRef.set(true);
        }, uid);
    } catch(e){
        console.log(e)
    }
}

export function* adminReadNonendUsersStart(){
    try{
        var usersRef = database.ref('/users').orderByChild('endUser').equalTo(null);
        while(true) {
            const users = yield take(createEventChannel(usersRef));
            yield put(adminReadNonendUsersFinish(users));
        }
    } catch(error){
        console.log(error)
        yield put(adminReadNonendUsersFinish(error));
    }
}

export function* allocateQuery(action){
    let {subordinate, query} = action.payload;
    let queryId = query.id;
    let {uid, role} = subordinate;
    try{
        var queryRef = database.ref('/queries').child(queryId).child('at');
        queryRef.set(role);
        queryRef = database.ref('/queries').child(queryId).child('allocation').child(role);
        queryRef.set(uid);
    }
    catch(error){
        console.log(error);
    }
}

export function* adminRequestEditQuery(action){
    let {query, authorized} = action.payload
    let queryId = query.id;
    const {user} = yield select((state)=>state);
    try{
        database.ref('/queries').child(queryId).child('at').set(authorized ? 
            getSuperiorRole(user.role)
            : getSubordinateRole(user.role));
        database.ref('/queries').child(queryId).child('suggestEdit').set(authorized);
    }
    catch(error){
        console.log("Error",error)
    }
}