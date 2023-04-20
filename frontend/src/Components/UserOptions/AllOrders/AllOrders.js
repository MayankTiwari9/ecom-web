import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import "./AllOrders.css";
import axios from 'axios';
import { getAllOrders } from "../../../Redux/actions/allOrderAction"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const AllOrders = () => {

    const dispatch = useDispatch();

    const orders = useSelector((state) => state.allOrders.allOrders);
    console.log(orders);

    const getData = orders.map((order) => {
        const { id, userId, date, products } = order;
        const data = products.map((products) => {
            const { productId, quantity } = products;
            return (
                <div>
                    <Link to={`/product/${productId}`}><div>Product Id :- {productId}</div></Link>
                    <div>Quantity:- {quantity}</div>
                </div>
            )
        })
        return (
            <div>
                <div>Order Id:- {id}</div>
                <div>User Id:- {userId}</div>
                <div>Date Created:- {date}</div>
                {data}
            </div>
        )
    })


    useEffect(() => {
        const fetchAllOrders = async () => {
            const response = await axios.get("https://fakestoreapi.com/carts").catch((err) => {
                console.log(err);
            })
            dispatch(getAllOrders(response.data));
        }

        fetchAllOrders();
    }, [dispatch]);

    return (
        <div className='allorders-main'>
            <Sidebar />
            <div>
                <div>
                    All Orders
                </div>
                <div>
                    {getData}
                </div>
            </div>
        </div>
    )
}

export default AllOrders;