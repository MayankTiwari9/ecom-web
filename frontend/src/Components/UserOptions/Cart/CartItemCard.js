import React from 'react';
import { Link } from 'react-router-dom';

const CartItemCard = ({ item, deleteCartItems }) => {
    return <div className='CartItemCard'>
        <div>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
            <span>{`Price: ₹${item.price}`}</span>
            <p onClick={() => deleteCartItems(item.id)}>Remove</p>
        </div>
    </div>
}

export default CartItemCard;