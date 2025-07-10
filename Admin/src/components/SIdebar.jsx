import React from 'react';
import {assets} from "../assets/admin_assets/assets.js";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return <div className='sidebar'>
    <div className='sidebar-options'>
      <NavLink to='/add' className='sidebar-option'>
        <img src={assets.add_icon} alt="add_icon" className='icon'/>
        <p>Add New</p>
      </NavLink>
      <NavLink to='/list' className='sidebar-option'>
        <img src={assets.order_icon} alt="list_icon" className='icon'/>
        <p>List Items</p>
      </NavLink>
      <NavLink to='/orders' className='sidebar-option'>
        <img src={assets.order_icon} alt="order_icon" className='icon'/>
        <p>Orders</p>
      </NavLink>
    </div>
  </div>;
};

export default Sidebar;