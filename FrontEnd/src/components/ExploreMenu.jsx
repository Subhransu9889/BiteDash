import React, {useEffect} from 'react';
import {menu_list} from "../assets/frontend_assets/assets.js";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreMenu = ({category, setCategory}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});
    })
  return <div className='explore-menu'>
      <h1 className='text-[#262626] font-medium xl:text-6xl sm:text-2xl'>Explore our menu</h1>
      <p className='max-w-[50%] col-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate our dining experience, one delicious meal at a time.</p>
      <div className='explore-menu-list scrollbar-hide'>
          {menu_list.map((item, index) => {
              return <div onClick={() => setCategory((prev) => (prev===item.menu_name?'all':item.menu_name))} className='explore-menu-item' key={index} data-aos="fade-right">
                  <img src={item.menu_image} alt="menu" className={`${category === item.menu_name ? 'item-active' : ''} h-28 w-28 min-w-20 rounded-full object-cover`}/>
                  <p className='mt-3 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
              </div>
          })}
      </div>
      <hr className='my-10 h-[2px] bg-[#e2e2e2] w-[80%] border-none]' data-aos="fade-right"/>
  </div>;
};

export default ExploreMenu;