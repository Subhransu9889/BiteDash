import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {assets} from "../assets/admin_assets/assets.js";

const Orders = ({url}) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const res = await axios.get(`${url}/api/order/list`);
    if(res.data.success){
      setOrders(res.data.data);
    }
    else{
      toast.error(res.data.message);
    }
  }

  const updateOrder = async (orderId, status) => {
    const res = await axios.post(`${url}/api/order/status`, {orderId, status});
    if(res.data.success){
      toast.success(res.data.message);
      await fetchAllOrders();
    }
    else{
      toast.error(res.data.message);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return <div className='order add'>
    <h3>Orders Page</h3>
    <div className='order-list'>
      {orders.map((order, index)=> (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='parcel-icon' className='w-[50px] sm:w-10'/>
            <div>
              <p className='order-item-food'>
                {order.foods.map((item, index) => {
                  if(index===order.foods.length-1){
                      return item.name + ' x ' + item.quantity;
                  }
                  else{
                      return item.name + ' x ' + item.quantity+', ';
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.first_name+' '+order.address.last_name}</p>
              <div className='order-item-address'>
                <p>{order.address.street+', '}</p>
                <p>{order.address.city+', '+order.address.state+', '+order.address.country+', '+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>No. of Items: {order.foods.length}</p>
            <p>Total price: ₹ {order.totalPrice}</p>
            <select className='bg-[#f0f0f0] border-1 border-solid border-[#f05a28] rounded-md p-2 outline-none w-[max(10vw,120px)]' value={order.status} onChange={(e) => {updateOrder(order._id, e.target.value)}}>
              <option value='Pending'>Pending</option>
              <option value='Out for delivery'>Out for Delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
      ))}
    </div>
  </div>;
};

export default Orders;