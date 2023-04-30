import {ActionTypes} from "../constants/userConstant";

export const userReducer = (state = {user:{}}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_USER:
            return {
                ...state,
                user: action.payload,
            }
    
        default:
            return state;
    }
}