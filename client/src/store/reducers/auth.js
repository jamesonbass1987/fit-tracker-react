import * as actionTypes from "../actions/actionTypes";


const initialState = {
    currentUser: null,
    token: null
}

const setCurrentUser = (state, action) => ({
    ...state,
    currentUser: action.payload.user || false,
    token: action.payload.token || false
});

const removeCurrentUser = (state, action) => ({
    ...state,
    currentUser: false,
    token: false
})

const authReducer = ( state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CURRENT_USER: return setCurrentUser(state, action);
        case actionTypes.REMOVE_CURRENT_USER: return removeCurrentUser(state, action);
        default: return state;
    }
}

export default authReducer;