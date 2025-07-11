import React, {useContext, useState} from 'react';
import {assets} from "../assets/frontend_assets/assets.js";
import {Link} from "react-router-dom";
import axios from "axios";
import {StoreContext} from "../context/StoreContext.jsx";

const LoginPopup = ({setShowLogin}) => {
    const {url, setToken} = useContext(StoreContext);
    const [currentState, setCurrentState] = useState('Login');
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onLoginHandler = async (e) => {
        e.preventDefault();
        let newURL = url;
        if(currentState==='Login'){
            newURL += '/api/user/login'
        } else{
            newURL += '/api/user/register'
        }

        const res = await axios.post(newURL, data);
        if(res.data.success){
        //     save the token
            setToken(res.data.token);
            localStorage.setItem('BiteDash_token', res.data.token);
            setShowLogin(false);
        }
        else{
            alert(res.data.message);
        }
    }

  return <div className='login-popup'>
      <form className='login-popup-container animate-fadeIn' onSubmit={onLoginHandler}>
          <div className='login-popup-title'>
              <h2 className='sm:text-[12px] md:text-2xl font-bold'>{currentState}</h2>
              <img src={assets.cross_icon} alt='corsse' className='w-4 cursor-pointer' onClick={() => setShowLogin(false)}/>
          </div>
          <div className='login-popup-inputs'>
              {currentState==='Sign Up' && <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Enter Your Name' className='login-popup-input-fields' required/>}
              <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter Your Email' className='login-popup-input-fields' required/>
              <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' className='login-popup-input-fields' required/>
          </div>
          <button type='submit' className='login-popup-button'>{currentState==='Sign Up'?'Create Account':'Login'}</button>
          <div className='login-popup-condition'>
              <input type='checkbox' id='login-popup-condition-checkbox' className='login-popup-condition-input' required/>
              <p>By continuing, I agree to the <Link to='/termsandconditions' className='terms-use-and-privacy-policy'>terms of use & privacy policy</Link></p>
          </div>
          {currentState==='Login'?
              <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')} className='text-[#f05a28] font-semibold cursor-pointer' >Click here</span></p>
              :
              <p>Already have an account? <span onClick={() => setCurrentState('Login')} className='text-[#f05a28] font-semibold cursor-pointer' >Login here</span></p>
          }
      </form>
  </div>;
};

export default LoginPopup;