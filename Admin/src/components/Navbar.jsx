import React from 'react';
import {assets} from "../assets/admin_assets/assets.js";

const Navbar = () => {
  return <div className='navbar'>
    <div className='navbar-left'>
      <img src={assets.logo} alt="logo" className='logo'/>
      <h1 className='font-md animate-pulse'>Admin Panel</h1>
    </div>
    <img src={assets.profile_image} alt="profile_image" className='profile-image'/>
  </div>;
};

export default Navbar;