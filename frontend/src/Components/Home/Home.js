import React, { useEffect } from 'react';
import "./Home.css";
import {CgMouse} from "react-icons/cg"; 
import ProductCard from './ProductCard';
import {useDispatch} from "react-redux";
import axios from "axios";
import {setProducts} from "../../Redux/actions/productAction"

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  const fetchProducts = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products?limit=5").catch((err) => {
      console.log(err);
    })
    dispatch(setProducts(response.data));
  }
    fetchProducts();
  },[dispatch])

  return (
    <div>
      <div className='home-container'>
        <h1>WELCOME TO E-COMMERCE</h1>
        <h3>FIND AMAZING PRODUCTS BELOW</h3>
        <a href='#container'>
                    <button className='scroll'> 
                        Scroll <CgMouse />
                    </button>
                </a>
      </div>
      <div id='container'>
        <ProductCard/>  
      </div>
    </div>
  )
}

export default Home;