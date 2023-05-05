import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions/productAction";
import { Link } from "react-router-dom";
import "./Products.css";


const Products = () => {

    const dispatch = useDispatch();

   
    const allProducts = useSelector((state) => state.allProducts.products); 
    // console.log(allProducts.products);

    const getData = allProducts.products.map((products) => {  
        const { _id, name, price, description, image } = products; 
        return ( 

            <div className='products-main'>
                <Link to={`/product/${_id}`}>
                    <div className='products-container'>
                        <div className='products-image'>
                            <img src={image} alt={_id} /> 
                        </div>
                        <div className='products-description'>
                            <h3>{name}</h3>
                            <h4>Product Description</h4>
                            <p>{description}</p>
                        </div>
                        <div className='products-amount'> 
                            <h2>$ {price}</h2> 
                        </div>
                    </div>
                </Link>
            </div>
        )
    })


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
            {getData}
        </>
    )
}

export default Products;