import { put, call, take } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {adminReadNonendUsersFinish } from '../actions/actionCreators'
import {createEventChannel} from '../../utils'
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
            // _.find(savedViews, 'description', view);
            // var partitionAuthorized = _.partition(users, 'authorized');
            // var partitionRole = _.values(_.groupBy(partitionAuthorized[0], 'role'));
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
    let {query} = action.payload
    let queryId = query.id;
    console.log(action)

    try{
        var queryRef = database.ref('/queries').child(queryId).child('at');
        queryRef.set('end-user');
        queryRef = database.ref('/queries').child(queryId).child('suggestEdit');
        queryRef.set(false);
    }
    catch(error){
        console.log("Error",error)
    }
}