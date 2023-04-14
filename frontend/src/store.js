import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { productReducer } from "./Redux/reducers/productReducers";

const reducers = combineReducers({
    allProducts: productReducer
});

const store = createStore(
    reducers, composeWithDevTools()
)

export default store;