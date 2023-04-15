import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {productsReducer, selectedProductsReducer} from "./Redux/reducers/productReducers"

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer
});

const store = createStore(
    reducers, composeWithDevTools()
)

export default store;