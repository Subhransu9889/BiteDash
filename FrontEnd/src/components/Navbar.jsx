import React, {useContext, useState} from 'react';
import {assets} from "../assets/frontend_assets/assets.js";
import {Link} from "react-router-dom";
import storeContext, {StoreContext} from "../context/StoreContext.jsx";

const Navbar = ({setShowLogin}) => {
    const [page, setPage] = useState('home');
    const {getAllCartAmount} = useContext(StoreContext);
  return <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className='navbar-menu'>
          <Link to='/' onClick={() => setPage('home')} className={page === 'home'? 'active': ''}>Home</Link>
          <a href='#explore-menu-items' onClick={() => setPage('menu')} className={page === 'menu'? 'active': ''}>Menu</a>
          <a href='/about' onClick={() => setPage('about')} className={page === 'about'? 'active': ''}>About</a>
          <a href='#footer' onClick={() => setPage('contact')} className={page === 'contact'? 'active': ''}>Contact</a>
      </ul>
      <div className='navbar-right'>
          <img src={assets.search_icon} alt="search" className='icon'/>
          <div className='navbar-search-icon'>
              <Link to='/cart'><img src={assets.basket_icon} alt="basket" className='icon'/></Link>
              <div className={getAllCartAmount()>0? 'dot' : ''}></div>
          </div>
          <button className='login-button' onClick={() => setShowLogin(true)}>Login</button>
      </div>
  </div>;
};

export default Navbar;