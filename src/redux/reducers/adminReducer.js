import {ADMIN_GET_ALL_USER_FINISH, ADMIN_READ_ALL_STORIES_FINISH, ADMIN_READ_ALL_TEAMS_FINISH} from '../actions/actions'

const initialState = {
    users : [],
    stories :[],
    teams : []
};

function reducer(state = initialState, action){
    switch(action.type){
        case ADMIN_GET_ALL_USER_FINISH:
            return { ...state, users : action.payload };

        case ADMIN_READ_ALL_STORIES_FINISH:
            return { ...state, stories : action.payload };

        case ADMIN_READ_ALL_TEAMS_FINISH:
            return { ...state, teams : action.payload };

    }
    return state;
}

export default reducer;