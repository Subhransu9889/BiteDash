import React, {useContext, useEffect} from 'react';
import {StoreContext} from "../context/StoreContext.jsx";
import FoodItem from "./FoodItem.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const FoodDisplay = ({category}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});
    })
    const {food_list} = useContext(StoreContext)
  return <div className='food-display'>
      <h2 className='text-[max(2vw,36px)] font-semibold text-center w-[40%]' data-aos='zoom-in'>Top dishes near you</h2>
      <div className='food-display-list'>
          {food_list.map((item, index) => {
              if(category === 'all' || item.category === category){
                  return <FoodItem key={index} {...item}/>
              }
          })}
      </div>
  </div>;
};

export default FoodDisplay;