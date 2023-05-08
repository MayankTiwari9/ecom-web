 import {
    ActionTypes, 
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_FAIL
} from "../constants/userConstant";

export const userReducer = (state = {user:{}}, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }

            case REGISTER_USER_FAIL:
                return{
                    ...state,
                    loading: false,
                    isAuthenticated: false,
                    user: null,
                    error: action.payload
                }
    
        default:
            return state;
    }
}