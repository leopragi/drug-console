import { USER_SIGNUP_FINISH, USER_LOGIN_FINISH, USER_CHECK_LOGIN_STATUS_FINISH, USER_READ_QUERY_FINISH} from '../actions/actions'

const initialState = null;

function reducer(state = initialState, action){
    switch(action.type){
        case USER_SIGNUP_FINISH:
            return action.payload;
        case USER_LOGIN_FINISH:
            return action.payload;
        case USER_CHECK_LOGIN_STATUS_FINISH:
            return action.payload;
       
    }
    return state;
}

export default reducer;