import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css";

const CartItemCard = ({ item, deleteCartItems }) => {
    return (
        <div className='CartItemCard-main'>
        <div className='CartItemCard'>
            <img src={item.image} alt="ssa" />
            <div className='CartItemCard-div'>
                <div  className='CartItemCard-div1'>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                </div>
                <div  className='CartItemCard-div2'>
                    <span>{`$ ${item.price}`}</span>
                </div>
            </div>
        </div>
            <button className='remove-btn' onClick={() => deleteCartItems(item.id)}>Remove</button>
        </div>
    )
}

export default CartItemCard;