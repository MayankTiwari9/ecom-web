import { ActionTypes } from "../constants/productConstants";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  const {data} = await axios.get("https://fakestoreapi.com/products");

  dispatch({
    type: ActionTypes.ALL_PRODUCTS,
    payload: data,
  })
}

export const setProducts = () => async (dispatch) => {
  const {data} = await axios.get("https://fakestoreapi.com/products?limit=5");

  dispatch({
      type: ActionTypes.SET_PRODUCTS,
      payload: data,
  })
}

export const selectedProduct = (id) => async (dispatch) => {

  const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);

  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: data,
})
};


export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
