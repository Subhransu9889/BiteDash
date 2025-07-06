import React, {useContext} from 'react';
import {StoreContext} from "../context/StoreContext.jsx";
import Navbar from "../components/Navbar.jsx";

const PlaceOrder = () => {
  const {getAllCartAmount} = useContext(StoreContext);
  return <div>
    <div className='bg-[var(--color-gray-900)] rounded-full flex flex-col items-center !pb-4'>
      <Navbar/>
    </div>
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='place-order-title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' className='place-order-input-fields'/>
          <input type='text' placeholder='Last Name' className='place-order-input-fields'/>
        </div>
        <input type='email' placeholder='Email address' className='place-order-input-fields'/>
        <input type='text' placeholder='Street' className='place-order-input-fields'/>
        <div className='multi-fields'>
          <input type='text' placeholder='City' className='place-order-input-fields'/>
          <input type='text' placeholder='State' className='place-order-input-fields'/>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='ZipCode' className='place-order-input-fields'/>
          <input type='text' placeholder='Country' className='place-order-input-fields'/>
        </div>
        <input type='text' placeholder='Phone Number' className='place-order-input-fields'/>
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
          <button className='cart-total-button'>Proceed to Payment</button>
        </div>
      </div>
    </form>
  </div>;
};

export default PlaceOrder;