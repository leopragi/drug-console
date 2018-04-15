import { put, call, take } from 'redux-saga/effects'
import { auth, database } from '../../config/firebase'

import {adminReadNonendUsersFinish } from '../actions/actionCreators'
import {createEventChannel} from '../../utils'

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