import axios from "axios";

import {ALL_PRODUCT_SUCCESS} from "../constants/testConstant";

export const getProduct = () => async (dispatch) => {
    const {data} = await axios.get("https://fakestoreapi.com/products?limit=5");

    console.log(data);
    dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
    })
}

// export const setProducts = () => async (dispatch) => {
//     const {data} = await axios.get("https://fakestoreapi.com/products?limit=5");

//     console.log(data);
//     dispatch({
//         type: ActionTypes.SET_PRODUCTS,
//         payload: data,
//     })
// }