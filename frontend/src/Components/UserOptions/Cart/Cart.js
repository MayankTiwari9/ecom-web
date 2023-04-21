import React from 'react';
import "./Cart.css";
import CartItemCard from './CartItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from '../../../Redux/actions/cartAction';

const Cart = () => {

  const dispatch = useDispatch();

    const {cartItems} = useSelector((state) => state.cart);
    console.log(cartItems); 
    

    const increaseQuantity = (id, quantity)=>{
      console.log(id);
      console.log(quantity);
      const newQty = quantity + 1;
      dispatch(addItemsToCart(id,newQty));
  }

  const decreaseQuantity = (id, quantity)=>{
    const newQty = quantity - 1;
    if(1 >= quantity){
        return ; 
    }
    dispatch(addItemsToCart(id,newQty));
  }

  const deleteCartItems = (id) =>{
    dispatch(removeItemsFromCart(id));
}

  return (
    <>
    <div>
      <div>
        <div>
          <div>
          Shopping Cart
          </div>
          <div>
            3 Items
          </div>
        </div>
        <div>
          cart Items Card
        </div>
      </div>
      <div>
        <div>
        Order Summary
        </div>
        <div>
          <div>Item 3</div>
          <div>Price</div>
        </div>
        <div>
          <p>SubTotal</p>
          <p>totol Price</p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
    {cartItems && cartItems.map((item) => (
      <>
      <div>
        <img src={item.image} alt='bag'/>
        <p>{item.price*item.quantity}</p>
        <p>{item.title}</p>
      </div>
      <CartItemCard item={item} deleteCartItems={deleteCartItems}/>
      <div className="cartInput">
      <button 
      onClick={()=> decreaseQuantity(item.id, item.quantity)}
      >-</button>
      <input type="number" value={item.quantity} readOnly/>
      <button 
      onClick={()=> increaseQuantity(item.id, item.quantity)}
      >+</button>
  </div>
      </>
    ))}
    </> 
  )
}

export default Cart; 