import { 
  ALL_PRODUCT_FAIL, 
  ALL_PRODUCT_REQUEST, 
  ALL_PRODUCT_SUCCESS,
  FEATURED_PRODUCT_REQUEST,
  FEATURED_PRODUCT_SUCCESS,
  FEATURED_PRODUCT_FAIL,  
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
  ActionTypes 
} from "../constants/productConstants";


export const allProductsReducer = (state = {products: []}, action) => {
  switch(action.type){
    case ALL_PRODUCT_REQUEST: 
    return{
      loading: true,
      product: []
    }
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products : action.payload.products,
      }
      case ALL_PRODUCT_FAIL:
        return{
          loading: false,
          payload: action.payload
        }
      default:
        return state;
  }
}

export const FeaturedProductReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case FEATURED_PRODUCT_REQUEST:
      return { 
        loading: true,
        product: []
       };
     case FEATURED_PRODUCT_SUCCESS:
      return {
        loading: false,
        products : action.payload.products,
      }  
      case FEATURED_PRODUCT_FAIL:
        return{
          loading: false,
          payload: action.payload
        }
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {product: {}}, action) => {
  switch (action.type){
    case SINGLE_PRODUCT_REQUEST:
      return{
        loading: true,
        ...state,
      }
      case SINGLE_PRODUCT_SUCCESS:
          return {
            loading: false,
              product: action.payload,
          }
          case SINGLE_PRODUCT_FAIL:
            return{
              loading: false,
              error: action.payload
            }
      default: 
      return state;
  }
}
