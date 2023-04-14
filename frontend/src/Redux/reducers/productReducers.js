import {ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS} from "../constants/productConstants";

const initialState = {
    products:[{
        id:1,
        name: "Mayank",
        price: 10000
    }],
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return{
                products: [],
            }
        case ALL_PRODUCT_SUCCESS:
            return{
                ...state,
                products: action.payload
            } 
        default:
            return state;
    }
}