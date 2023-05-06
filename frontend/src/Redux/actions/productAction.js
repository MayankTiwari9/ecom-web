import { 
  ActionTypes, 
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS, 
  ALL_PRODUCT_FAIL,
  FEATURED_PRODUCT_REQUEST,
  FEATURED_PRODUCT_SUCCESS,
  FEATURED_PRODUCT_FAIL, 
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
} from "../constants/productConstants";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({type: ALL_PRODUCT_REQUEST});

    
  const {data} = await axios.get("/api/v1/products");

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message
    })
  }
}

export const featuredProducts = () => async (dispatch) => {

  try {
    dispatch({type: FEATURED_PRODUCT_REQUEST})

    const {data} = await axios.get("/api/v1/products/featured");

  dispatch({
      type: FEATURED_PRODUCT_SUCCESS,
      payload: data,
  })

  } catch (error) {
    dispatch({
      type:FEATURED_PRODUCT_FAIL,
      error: error.response.data.message
    })
  }
  
}

export const selectedProduct = (id) => async (dispatch) => {
  try {
    dispatch({type: SINGLE_PRODUCT_REQUEST})

    
  const {data} = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: SINGLE_PRODUCT_SUCCESS,
    payload: data,
})

  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_FAIL,
      payload: error.response.data.message
    })
  }

};


export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
