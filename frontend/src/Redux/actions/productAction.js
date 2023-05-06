import { ActionTypes } from "../constants/productConstants";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  const {data} = await axios.get("/api/v1/products");

  dispatch({
    type: ActionTypes.ALL_PRODUCTS,
    payload: data,
  })
}

export const featuredProducts = () => async (dispatch) => {
  const {data} = await axios.get("/api/v1/products/featured");

  dispatch({
      type: ActionTypes.SET_PRODUCTS,
      payload: data,
  })
}

export const selectedProduct = (id) => async (dispatch) => {

  const {data} = await axios.get(`/api/v1/product/${id}`);

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
