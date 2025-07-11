import React, {useContext, useState} from 'react';
import {assets} from "../assets/frontend_assets/assets.js";
import {Link, useNavigate} from "react-router-dom";
import storeContext, {StoreContext} from "../context/StoreContext.jsx";

const Navbar = ({setShowLogin}) => {
    const [page, setPage] = useState('home');
    const {getAllCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        setToken('');
        localStorage.removeItem('BiteDash_token');
        navigate('/');
        setShowLogin(true);
    }
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
          {!token ? (
              <button className='login-button' onClick={() => setShowLogin(true)}>Login</button>
          ) : (
              <div className='navbar-profile group relative'>
                  <img src={assets.profile_icon} alt='profile' className='h-9' />
                  <ul className='navbar-profile-dropdown'>
                      <li className='navbar-profile-dropdown-li'>
                          <img src={assets.bag_icon} alt='bag' className='icon' />
                          <p className='hover:text-[#f05a28]'>My Bag</p>
                      </li>
                      <hr />
                      <li className='navbar-profile-dropdown-li' onClick={logoutHandler}>
                          <img src={assets.logout_icon} alt='logout' className='icon' />
                          <p className='hover:text-[#f05a28]'>Logout</p>
                      </li>
                  </ul>
              </div>
          )}
      </div>
  </div>;
};

export default Navbar;