import {ActionTypes} from "../constants/cartConstant";

const initialState = {
    carts:[],
}

export const allCartReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_CART:
            return {...state, carts: payload};
        default:
            return state;
    }
}