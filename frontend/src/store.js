import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {allProductsReducer, productsReducer, selectedProductsReducer} from "./Redux/reducers/productReducers"
import { allOrderReducer } from "./Redux/reducers/allOrderReducer";
import {cartReducer} from "./Redux/reducers/cartReducer";
import { userReducer } from "./Redux/reducers/userReducer";

const reducers = combineReducers({
    featuredProducts: productsReducer,
    allProducts: allProductsReducer,
    product: selectedProductsReducer,
    allOrders: allOrderReducer,
    cart: cartReducer,
    user: userReducer
});

let initialState = {
    cart:{
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    }
}

const middleware = [thunk]

const store = createStore(
    reducers, initialState,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;