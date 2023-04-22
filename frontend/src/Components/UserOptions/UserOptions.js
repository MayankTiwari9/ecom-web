import React, { Fragment, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { SpeedDial, SpeedDialAction} from "@material-ui/lab";
import { Backdrop } from '@material-ui/core';
import { Person } from "@material-ui/icons";
import { ShoppingCart } from '@material-ui/icons';
import { ExitToApp } from '@material-ui/icons';
import { ListAlt } from '@material-ui/icons';
import "./UserOptions.css";
import {useAlert} from "react-alert";
import { useSelector } from 'react-redux';


const UserOptions = () => {

    const alert = useAlert();
    
    const {cartItems} = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const options = [
        { icon: <ListAlt />, name: "Orders", func: orders },
        { icon: <Person />, name: "Profile", func: account },
        { icon: <ShoppingCart style={{color:"tomato"}}/>, name: `Cart(${cartItems.length})`, func: cart},
        { icon: <ExitToApp />, name: "Logout", func: logoutUser },
    ]

    
    function orders(){
        navigate("/orders");
    }
    function account(){
        navigate("/account");
    }
    function logoutUser(){
        alert.success("Logout Successfully");
    }
    function cart(){
        navigate("/cart");
    }

  return (
    <Fragment>
        <Backdrop open={open} style={{zIndex: "10"}}/>
        <SpeedDial ariaLabel='SpeedDial tooltip example' onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} style={{zIndex: "11"}}
                direction="down" className='speedDial' icon={<img className="speedDialIcon" src={"/Profile.png"} alt="Profile" />}>
                {options.map((item)=>(
                    <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} 
                    onClick={item.func} tooltipOpen={window.innerWidth <= 600 ? true : false}/>
                ))}
            </SpeedDial>
    </Fragment>
  )
}

export default UserOptions;