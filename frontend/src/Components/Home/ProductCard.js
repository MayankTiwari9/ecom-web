import React from 'react'
import {useSelector} from "react-redux";

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const renderList = products.map((product) => {
    const {id,name,price} = product;

    return(
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
  })

  return (
    <>
    <h1>ProductCard</h1>
    {renderList}
    </>

  )
}

export default ProductCard;