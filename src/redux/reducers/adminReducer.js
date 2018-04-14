import {ADMIN_GET_ALL_USER_FINISH} from '../actions/actions'

const initialState = {
    users : []
};

function reducer(state = initialState, action){
    switch(action.type){
        case ADMIN_GET_ALL_USER_FINISH:
            return { ...state, users : action.payload };
    }
    return state;
}

export default reducer;