import React from 'react'
import { useSelector } from "react-redux";
import "./Home.css";

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const renderList = products.map((product) => {
    const { id, name, price, image, category, description } = product;

    return (
      <div>
        <div className='productCard-container'>
          <div className='productCard-image'>
            <img src={image} alt={id} />
          </div>
          <div className='productCard-details'>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>{category}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <h1>ProductCard</h1>
      <div className='productcart-main'>
        {renderList}
      </div>
    </>

  )
}

export default ProductCard;