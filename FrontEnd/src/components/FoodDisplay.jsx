import React, {useContext, useEffect, useState} from 'react';
import {StoreContext} from "../context/StoreContext.jsx";
import FoodItem from "./FoodItem.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import {ChevronDown} from "lucide-react";

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    const [visibleCount, setVisibleCount] = useState(8);
    const loadMore = () => {
        setVisibleCount(prevVisibleCount => prevVisibleCount + 4);
    }
    const filteredList = category === 'all'
        ? food_list
        : food_list.filter(item => item.category === category);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true});
    })
  return <div className='food-display'>
      <h2 className='text-[#262626] text-[max(2vw,36px)] font-semibold text-center sm:w-full md:w-[40%]' data-aos='zoom-in'>Top dishes near you</h2>
      <div className='food-display-list'>
          {filteredList.slice(0, visibleCount).map((item, index) => {
              if(category === 'all' || item.category === category){
                  return <FoodItem key={index} {...item}/>
              }
          })}
      </div>

      {visibleCount < filteredList.length && (
          <div className="p-4 flex justify-center items-center text-2xl">
              <div className="animate-bounce border rounded-2xl p-2 cursor-pointer" onClick={loadMore}>
                  <ChevronDown />
              </div>
          </div>
      )}
  </div>;
};

export default FoodDisplay;