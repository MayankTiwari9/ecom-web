import React from 'react';
import {Link} from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logo.png";
import { Add, Dashboard, ExpandMore, ImportExport, ListAlt, People, PostAdd, RateReview } from '@material-ui/icons';
import {TreeView, TreeItem} from "@material-ui/lab";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/">
        <img src={logo} alt="Ecommerce"/>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <Dashboard />dashboard
        </p>
      </Link>
      <Link>
      <TreeView defaultCollapseIcon={<ExpandMore/>} defaultExpandIcon={<ImportExport/>}> 
      <TreeItem nodeId='1' label="Products">
        <Link to="/admin/products">
          <TreeItem nodeId='2' label="All" icon={<PostAdd/>}/>
        </Link>
        <Link to="/admin/product">
          <TreeItem nodeId='3' label="Create" icon={<Add/>}/> 
        </Link>
        </TreeItem>
      </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAlt/> Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <People/> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReview/> Reviews
        </p>
      </Link>
    </div>
  )
}

export default Sidebar;