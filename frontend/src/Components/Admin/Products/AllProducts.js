import React from 'react';
import "./AllProducts.css";
import Sidebar from '../Sidebar/Sidebar';

const AllProducts = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className='admin-product-main'>
        <div className='admin-product-heading'>
          <h2>Product Inventory</h2>
          <button>Create Product</button>
        </div>
      </div>
    </div>
  )
}

export default AllProducts;