import {ALL_PRODUCT_REQUEST} from "../constants/ProductsConstants";

export const productReducer = (state = {products:[]}, action) =>{
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return{
                products,
            }

            default:
                return state;
    }
}