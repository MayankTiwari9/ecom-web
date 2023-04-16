import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../Redux/actions/productAction";
import { Link } from "react-router-dom";
import "./Products.css";


const Products = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts.products);

    const getData = allProducts.map((products) => {
        const { id, title, price, description, category, image } = products;
        // if(category === "men's clothing"){
        return (

            <div>
                <Link to={`/product/${id}`}>
                    <div className='products-container'>
                        <div className='products-image'>
                            <img src={image} alt={id} />
                        </div>
                        <div className='products-description'>
                            <h1>{title}</h1>
                            <h1>{description}</h1>
                        </div>
                        <div className='products-amount'>
                            <h1>$ {price}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        )
        // }
    })

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
                console.log(err);
            })
            dispatch(setProducts(response.data));
        }
        fetchProducts();
    }, [dispatch]);


    return (
        <>
            <div>
                <nav className='products-navbar'>
                    <p>All Products</p>
                    <p>men's clothing</p>
                    <p>jewelery</p>
                    <p>electronics</p>
                    <p>women's clothing</p>
                </nav>
            </div>
            {getData}
        </>
    )
}

export default Products;