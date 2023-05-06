import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions/productAction";
import { Link } from "react-router-dom";
import "./Products.css";


const Products = () => {

    const dispatch = useDispatch();
   
    const {products} = useSelector((state) => state.allProducts.products); 

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
  
    return (
        <>
            <div>
                <nav className='products-navbar'>
                    <Link to={"/products"}>All Products</Link>
                    <Link to={"/products/mens"}>men's clothing</Link>
                    <Link to={"/products/womens"}>women's clothing</Link>
                    <Link to={"/products/jewelery"}>jewelery</Link>
                    <Link to={"/products/electronics"}>electronics</Link>
                </nav>
            </div>
            {products && products.map((item, index) => (
                <div className='products-main' key={index}> 
                            <Link to={`/product/${item._id}`}>
                                 <div className='products-container'>
                                     <div className='products-image'>
                                         <img src={item.images[0].url} alt={index} /> 
                                     </div>
                                     <div className='products-description'>
                                         <h3>{item.name}</h3>
                                         <h4>Product Description</h4>
                                         <p>{item.description}</p>
                                     </div>
                                     <div className='products-amount'> 
                                         <h2>₹ {item.price}</h2> 
                                     </div>
                                 </div>
                             </Link>
                         </div>
            ))}
        </>
    )
}

export default Products;