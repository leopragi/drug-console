import {ADMIN_READ_ALL_STORIES_FINISH, 
    ADMIN_READ_ALL_TEAMS_FINISH, ADMIN_READ_NONEND_USERS_FINISH} from '../actions/actions'

const initialState = {
    users : [],
    stories :[],
    teams : []
};

function reducer(state = initialState, action){
    switch(action.type){
        case ADMIN_READ_ALL_STORIES_FINISH:
            return { ...state, stories : action.payload };

        case ADMIN_READ_ALL_TEAMS_FINISH:
            return { ...state, teams : action.payload };

        case ADMIN_READ_NONEND_USERS_FINISH:
            return {...state, users : action.payload};

    }
    return state;
}

export default reducer;