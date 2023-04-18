import {ActionTypes} from "../constants/cartConstant";

export const getAllCart = (carts) => {
    return{
        type: ActionTypes.GET_CART,
        payload: carts
    }
} 