import React from 'react';
import Navbar from "./Navbar.jsx";

const Header = () => {
  return <>
      <div className='min-h-screen w-full text-white relative'>
          <div className='absolute inset-0'>
              <img
                  src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                  alt=""
                  role="presentation"
                  className='h-full w-full object-cover'
              />
              <div className='absolute inset-0'>
                  <Navbar/>
              </div>
              <div className='absolute inset-0 flex items-center max-w-[50%] bottom-[10%] left-[6vw]'>
                  <div className='header-content animate-slideIn'>
                      <h2 className='text-white font-medium text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
                      <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate our dining experience, one delicious meal at a time.</p>
                      <button className='view-manu-button'>View Menu</button>
                  </div>
              </div>
          </div>
      </div>
  </>;
};

export default Header;