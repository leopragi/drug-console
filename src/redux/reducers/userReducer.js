import { USER_SIGNUP_START, USER_SIGNUP_FINISH} from '../actions/actions'

const initialState = null;

function reducer(state = initialState, action){
    switch(action.type){
        case USER_SIGNUP_FINISH:
            return action.payload;
        case USER_SIGNUP_START:
            return initialState;
    }
    return initialState;
}

export default reducer;