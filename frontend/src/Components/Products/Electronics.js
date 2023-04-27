import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Electronics = () => {
    const allProducts = useSelector((state) => state.allProducts.products);

    const getData = allProducts.map((products) => {
        const { id, title, price, description, category, image } = products;
        if(category === "electronics"){
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
        return null;
    })



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

export default Electronics;