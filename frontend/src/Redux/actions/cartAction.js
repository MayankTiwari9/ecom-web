import axios from "axios"
import {ActionTypes} from "../constants/cartConstant"

export const addItemsToCart = (id , quantity) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/v1/product/${id}`);
    console.log(data.product);

    dispatch({type: ActionTypes.ADD_TO_CART,
        payload:{
            id,
            image: data.image,
            name: data.product.name,
            price: data.product.price,
            quantity,
        },
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

}

export const removeItemsFromCart = (id) => async(dispatch, getState) =>{
    dispatch({type: ActionTypes.REMOVE_CART_ITEM,
        payload: id
        }
    );

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)) 
}