import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../../Redux/actions/productAction';

const WomensClothing = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts.products);

    const getData = allProducts.map((products) => {
        const { id, title, price, description, category, image } = products;
        if(category === "women's clothing"){
        return (

            <div className='products-main'>
                <Link to={`/product/${id}`}>
                    <div className='products-container'>
                        <div className='products-image'>
                            <img src={image} alt={id} />
                        </div>
                        <div className='products-description'>
                            <h3>{title}</h3>
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
        }
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

export default WomensClothing;