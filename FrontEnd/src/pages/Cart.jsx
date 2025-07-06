import React, {useContext} from 'react';
import {StoreContext} from "../context/StoreContext.jsx";
import Navbar from "../components/Navbar.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const {cartItems, food_list, removeFromCart, getAllCartAmount} = useContext(StoreContext);
  return <>
    <div>
      <div className='bg-[var(--color-gray-900)] rounded-full flex flex-col items-center !pb-4'>
        <Navbar/>
      </div>
      <div className='cart-header'>
        <h1 className='text-2xl font-bold'>Your Cart</h1>
        <p className='text-gray-500'>Craving check! Review your delicious picks before ordering.</p>
      </div>
      <div className='cart'>
        <div className='cart-items'>
          <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item, index) => {
            if(cartItems[item._id]>0){
              return (
                  <div key={item._id}>
                    <div className='cart-items-title cart-items-item'>
                      <img src={item.img} alt={item.name} className='w-12 rounded-full'/>
                      <p className='truncate'>{item.name}</p>
                      <p>₹ {item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>₹ {item.price*cartItems[item._id]}</p>
                      <div className='cart-items-remove-button' onClick={() => removeFromCart(item._id)}>
                        <img src={assets.cross_icon} alt='remove' className='size-4'/>
                      </div>
                    </div>
                    <hr className='h-1 bg-[#e2e2e2] border-none'/>
                  </div>
              )
            }
          })}
        </div>
      </div>
      <div className='cart-bottom'>
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
            <button className='cart-total-button' onClick={() => {getAllCartAmount()>0 && navigate('/order')}}>Proceed to Checkout</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <h2 className='text-[#555]'>Apply Promocode</h2>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='Enter Promocode' className='bg-transparent border-none outline-none p-2'/>
              <button className='w-[max(10vw, 150px)] bg-black border-none text-white !p-3 rounded-md cursor-pointer'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
};

export default Cart;