import React, {useContext, useState} from 'react';
import {StoreContext} from "../context/StoreContext.jsx";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";

const PlaceOrder = () => {
  const {getAllCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
  }

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map(item => {
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      foods: orderItems,
      totalPrice: getAllCartAmount()+99
    }
    let res = await axios.post(`${url}/api/order/place`, orderData, {headers: {token}});
    if(res.data.success){
      const {session_url} = res.data;
      window.location.replace(session_url);
    } else{
      alert(res.data.message);
    }
  }
  return <div>
    <div className='bg-[var(--color-gray-900)] rounded-full flex flex-col items-center !pb-4'>
      <Navbar/>
    </div>
    <form className='place-order' onSubmit={placeOrder}>
      <div className='place-order-left'>
        <p className='place-order-title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='first_name' onChange={onChangeHandler} value={data.first_name} type='text' placeholder='First Name' className='place-order-input-fields'/>
          <input required name='last_name' onChange={onChangeHandler} value={data.last_name} type='text' placeholder='Last Name' className='place-order-input-fields'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email address' className='place-order-input-fields'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street' className='place-order-input-fields'/>
        <div className='multi-fields'>
          <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City' className='place-order-input-fields'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State' className='place-order-input-fields'/>
        </div>
        <div className='multi-fields'>
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='ZipCode' className='place-order-input-fields'/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' className='place-order-input-fields'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone Number' className='place-order-input-fields'/>
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2 className='text-2xl font-semibold'>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹ {getAllCartAmount()}</p>
            </div>
            <hr className='cart-total-details-hr'/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹ {getAllCartAmount()>0? 99 : 0}</p>
            </div>
            <hr className='cart-total-details-hr'/>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹ {getAllCartAmount()>0? getAllCartAmount()+99 : 0}</b>
            </div>
          </div>
          <button type='submit' className='cart-total-button'>Proceed to Payment</button>
        </div>
      </div>
    </form>
  </div>;
};

export default PlaceOrder;