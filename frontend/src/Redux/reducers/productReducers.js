import { ActionTypes } from "../constants/productConstants";

// const intialState = {
//   products: [],
// };

export const allProductsReducer = (state = {products: []}, action) => {
  switch(action.type){
    case ActionTypes.ALL_PRODUCTS:
      return {
        products : action.payload,
      }

      default:
        return state;
  }
}

export const productsReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { 
        products: action.payload,
       };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {product: {}}, action) => {
  switch (action.type){
      case ActionTypes.SELECTED_PRODUCT:
          return {
              product: action.payload
          }

      default: 
      return state;
  }
}
