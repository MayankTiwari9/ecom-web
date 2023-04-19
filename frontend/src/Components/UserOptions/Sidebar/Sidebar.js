import React from 'react';
import "./Sidebar.css";
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { VscListUnordered } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import logo from "../../../images/logo.png";
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <Link to="/">
        <div className='sidebar-logo'>
            <img src={logo} alt="logo"/>
        </div>
        </Link>
        <Link to="/admin/dashboard">
        <div className='sidebar-div'>
            <RiDashboardFill/>
            <div>Dashboard</div>
        </div>
        </Link>
        <Link to="/admin/products">
        <div className='sidebar-div'>
            <BsArrowDownUp/>
            <div>Products</div>
        </div>
        </Link>
        <Link to="/admin/orders">
        <div className='sidebar-div'>
            <VscListUnordered/>
            <div>All Orders</div>
        </div>
        </Link>
        <Link to="/admin/users">
        <div className='sidebar-div'>
            <FiUsers/>
            <div>All Users</div>
        </div>
        </Link>

    </div>
  )
}

export default Sidebar;