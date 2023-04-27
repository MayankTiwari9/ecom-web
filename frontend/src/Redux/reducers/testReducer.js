import { ALL_PRODUCT_SUCCESS } from "../constants/testConstant";

export const testReducer = (state = {products: []}, action) => {
    switch(action.type){
        case ALL_PRODUCT_SUCCESS:
            return{
                products: action.payload,
            }
            default:
                return state;
    }
}