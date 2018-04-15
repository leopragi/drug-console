import {USER_READ_QUERY_FINISH, USER_READ_ALL_SUBORDINATE_FINISH} from '../actions/actions'

const initialState = {
    queries : [],
    subordinates : [],
    superiors : []
};

function reducer(state = initialState, action){
    switch(action.type){
        case USER_READ_QUERY_FINISH:
            return { ...state, queries: action.payload};
        case USER_READ_ALL_SUBORDINATE_FINISH:
            return { ...state, subordinates: action.payload};
    }
    return state;
}

export default reducer;