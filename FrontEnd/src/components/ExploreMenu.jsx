import React, {useEffect} from 'react';
import {menu_list} from "../assets/frontend_assets/assets.js";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreMenu = ({category, setCategory}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});
    })
  return <div className='explore-menu'>
      <h1 className="text-[#262626] font-medium text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
          Explore our menu
      </h1>

      <p className="max-w-[90%] sm:max-w-[70%] md:max-w-[50%] text-[#808080] text-center text-sm sm:text-base">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
          {menu_list.map((item, index) => (
              <div
                  onClick={() => setCategory((prev) => (prev === item.menu_name ? "all" : item.menu_name))}
                  className="explore-menu-item"
                  key={index}
                  data-aos="fade-right"
              >
                  <img
                      src={item.menu_image}
                      alt="menu"
                      className={`${category === item.menu_name ? "item-active" : ""} h-28 w-28 min-w-20 rounded-full object-cover`}
                  />
                  <p className="mt-3 text-[#747474] text-[max(1.2vw,14px)] cursor-pointer whitespace-nowrap">
                      {item.menu_name}
                  </p>
              </div>
          ))}
      </div>

      <hr className="my-10 h-[2px] bg-[#e2e2e2] w-[80%] border-none" data-aos="fade-right" />
  </div>;
};

export default ExploreMenu;