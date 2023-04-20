import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productsReducer, selectedProductsReducer} from "./Redux/reducers/productReducers"
import { allOrderReducer } from "./Redux/reducers/allOrderReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    allOrders: allOrderReducer
});

const middleware = [thunk]

const store = createStore(
    reducers, composeWithDevTools(applyMiddleware(...middleware))
)

export default store;