import React from 'react'
import { useSelector } from "react-redux";
import "./Home.css";
import {Link} from "react-router-dom";

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category, rating } = product;

    return (
      <div >
        <Link to={`/product/${id}`} >
        <div className='productCard-container'>
          <div className='productCard-image'>
            <img src={image} alt={id} />
          </div>
          <div className='productCard-details'>
            <h2>{title}</h2>
            <h4>$ {price}</h4>
            <p>{category}</p>
            <p>{rating.rate}</p>
          </div>
        </div>
         </Link>
      </div>
    )
  })

  return (
    <>
      <h1 className='productCart-heading'>Featured Products</h1>
      <div className='productcart-main'>
        {renderList}
      </div>
      <h1 className='productCart-heading'>To Get All Products <Link to="/products">Click Here</Link></h1>
    </>

  )
}

export default ProductCard;