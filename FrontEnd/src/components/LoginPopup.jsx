import React, {useState} from 'react';
import {assets} from "../assets/frontend_assets/assets.js";
import {Link} from "react-router-dom";

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState('Sign Up');
  return <div className='login-popup'>
      <form className='login-popup-container'>
          <div className='login-popup-title'>
              <h2>{currentState}</h2>
              <img src={assets.cross_icon} alt='corsse' className='login-popup-close-icon' onClick={() => setShowLogin(false)}/>
          </div>
          <div className='login-popup-inputs'>
              {currentState==='Sign Up' && <input type='text' placeholder='Enter Your Name' required/>}
              <input type='email' placeholder='Enter Your Email' required/>
              <input type='password' placeholder='Password' required/>
          </div>
          <button className='login-popup-button'>{currentState==='Sign Up'?'Create Account':'Login'}</button>
          <div className='login-popup-condition'>
              <input type='checkbox' id='login-popup-condition-checkbox' required/>
              <p>By continuing, I agree to the <Link to='/termsandconditions'>terms of use & privacy policy</Link></p>
          </div>
          <p>Create a new account? <span>Click here</span></p>
          <p>Already have an account? <span>Login here</span></p>
      </form>
  </div>;
};

export default LoginPopup;