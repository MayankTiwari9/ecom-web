import React from 'react'
import { useSelector } from "react-redux";
import "./Home.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { products } = useSelector((state) => state.featuredProducts.products);
  console.log(products);


  return (
    <>
      <h1 className='productCart-heading'>Featured Products</h1>
      <div className='productcart-main'>
        {products && products.map((item, index) => (
          <div key={index}>
          <Link to={`/product/${item._id}`} >
            <div className='productCard-container'>
              <div className='productCard-image'>
                <img src={item.images[0].url} alt={item._id} />
              </div>
              <div className='productCard-details'>
                <h2>{item.name}</h2>
                <h4>₹ {item.price}</h4>
                <p>{item.ratings}</p>
              </div>
            </div>
          </Link>
          </div>
        ))
        }
        
      </div>
      <h1 className='productCart-heading'><Link to="/products">All Products</Link></h1>
    </>

  )
}

export default ProductCard;