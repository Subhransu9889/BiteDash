import React, {useState} from 'react';
import {assets} from "../assets/frontend_assets/assets.js";

const Navbar = () => {
    const [page, setPage] = useState('home');
  return <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo'/>
      <ul className='navbar-menu'>
          <li onClick={() => setPage('home')} className={page === 'home'? 'active': ''}>Home</li>
          <li onClick={() => setPage('menu')} className={page === 'menu'? 'active': ''}>Menu</li>
          <li onClick={() => setPage('about')} className={page === 'about'? 'active': ''}>About</li>
          <li onClick={() => setPage('contact')} className={page === 'contact'? 'active': ''}>Contact</li>
      </ul>
      <div className='navbar-right'>
          <img src={assets.search_icon} alt="search" className='icon'/>
          <div className='navbar-search-icon'>
              <img src={assets.basket_icon} alt="basket" className='icon'/>
              <div className='dot'></div>
          </div>
          <button className='login-button'>Login</button>
      </div>
  </div>;
};

export default Navbar;