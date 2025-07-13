import React, {useContext, useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import {StoreContext} from "../context/StoreContext.jsx";
import axios from "axios";
import {assets} from "../assets/frontend_assets/assets.js";

const MyOrders = () => {
    const [data, setData] = useState([]);
    const {url, token} = useContext(StoreContext);

    const fetchOrders = async () => {
        const res = await axios.post(url+'/api/order/userorders',{},{headers: {token: token}});
        setData(res.data.data);
    }

    useEffect(() => {
        if(token){
            fetchOrders();
        }
    }, [token]);
  return <div>
      <div className='bg-[var(--color-gray-900)] rounded-full flex flex-col items-center !pb-4'>
          <Navbar/>
      </div>
      <div className='my-orders'>
          <h2>My Orders</h2>
          <div className='container'>
              {data.map((order, index) => (
                  <div className='my-orders-order' key={index}>
                      <img src={assets.parcel_icon} alt='parcel-icon' className='w-[50px'/>
                      <p>{order.foods.map((item, index) => {
                          if(index===order.foods.length-1){
                              return item.name + ' x ' + item.quantity;
                          }
                          else{
                              return item.name + ' x ' + item.quantity+', ';
                          }
                      })}</p>
                      <p>₹ {order.totalPrice}.00</p>
                      <p>Items: {order.foods.length}</p>
                      <p><span className='text-[#f05a28]'>&#x25cf;</span><b className='font-md text-[#454545]'>{order.status}</b></p>
                      <button className='my-orders-button'>Track Order</button>
                  </div>
              ))}
          </div>
      </div>
  </div>;
};

export default MyOrders;