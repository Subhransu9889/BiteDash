import React, {useContext, useEffect, useState} from 'react';
import {IndianRupee, ShoppingCart} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import {assets} from "../assets/frontend_assets/assets.js";
import {StoreContext} from "../context/StoreContext.jsx";

const FoodItem = ({_id, name, image, price, rating, description, category}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});
    }, []);
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)
  return (<>
          <div className='food-item' data-aos="fade-up">
              <div
                  key={_id}
                  className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 flex flex-col items-center  justify-between w-full max-w-xs h-[380px]"
              >
                  <img
                      src={url+"/images/"+image}
                      alt={name}
                      className="w-fit h-50 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-600 p-2 text-center">{description}</p>
                  <div className="text-sm font-bold text-gray-700 flex"><div className="flex items-center"><IndianRupee className="size-4"/></div>{price}</div>
                  <div className="text-green-500 text-sm font-medium pb-[6px] flex gap-4 justify-evenly items-center"><div>
                      {
                          !cartItems[_id] ? <ShoppingCart className='p-2' onClick={() => addToCart(_id)}/> : <div className="flex items-center gap-3 cursor-pointer bottom-4 p-2 text-[18px]">
                              <img src={assets.remove_icon_red} alt="remove" className="size-4" onClick={() => removeFromCart(_id)}/>
                              <p>{cartItems[_id]}</p>
                              <img src={assets.add_icon_green} alt="add" className="size-4" onClick={() => addToCart(_id)}/>
                          </div>
                      }
                  </div><span className='text-yellow-400'>⭐ {rating}</span></div>
              </div>
          </div>
      </>
  )
};

export default FoodItem;