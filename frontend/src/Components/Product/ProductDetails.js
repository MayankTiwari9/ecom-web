import React, { useEffect } from 'react';
import "./ProductDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProduct, selectedProduct } from "../../Redux/actions/productAction"
import {useAlert} from "react-alert";

const ProductDetails = () => {

  const product = useSelector((state) => state.product);
  const { id, title, price, description, category, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
        console.log(err);
      })
      dispatch(selectedProduct(response.data));
      console.log(response.data);
    }


    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [dispatch, productId])

  const addToCartHandler = () => {
    alert.success("Product Successfully added to cart");
  }

  return (
    <div className='productDetails-main'>
      <div className='productDetails-container'>
        <div className='productDetails-image'>
          <img src={image} alt={id} />
        </div>
        <div className='productDetails-detail'>
          <div>
            <p>Category :- </p>
            <h4>{category}</h4>
          </div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <h4>Product Id :- </h4>
            <p>{id}</p>
          </div>
          <div>
            <h1>$ {price}</h1>
          </div>
          <div>
            <h4>Description:- </h4> 
            <p>{description}</p>
          </div>
          <div>
            <button className='productDetails-btn' onClick={addToCartHandler}>Add To Cart</button>
          </div>
        </div>
      </div>
    </ div>

  )
}

export default ProductDetails;