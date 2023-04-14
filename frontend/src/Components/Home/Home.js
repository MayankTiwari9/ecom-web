import React from 'react';
import "./Home.css";
import {CgMouse} from "react-icons/cg"; 
import ProductCard from './ProductCard';

const Home = () => {

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