import {USER_READ_QUERY_FINISH} from '../actions/actions'

const initialState = null
function reducer(state = initialState, action){
    switch(action.type){
        case USER_READ_QUERY_FINISH:
            return action.payload;

    }

    return initialState;
}

export default reducer;