import {ALL_PRODUCT_SUCCESS} from "../constants/productConstants";

export const getProduct = (products) => {
    return{
        type: ALL_PRODUCT_SUCCESS,
        payload: products,
    }
}