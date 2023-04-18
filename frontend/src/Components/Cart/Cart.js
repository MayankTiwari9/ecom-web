import React, { useEffect } from 'react';
import "./Cart.css";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {getAllCart} from "../../Redux/actions/cartAction"


const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCart = async() =>{
      const response = await axios.get("https://fakestoreapi.com/carts").catch((err) =>{
        console.log(err);
      })
      dispatch(getAllCart(response.data));
      // console.log(response.data);  
      // console.log(response.data[0]);  
      // console.log(response.data[0].id);  
      // console.log(response.data[0].date);  
      // console.log(response.data[0].products[0]);  
      // console.log(response.data[0].products[0].productId);  
      // console.log(response.data[0].products[0].quantity);  

    }
    fetchCart();
  },[dispatch]);
  return (
    <div>Cart</div>
  )
}

export default Cart;