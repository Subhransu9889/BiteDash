import React, {useEffect} from 'react';
import {assets} from "../assets/frontend_assets/assets.js";
import AOS from 'aos';
import 'aos/dist/aos.css'

const AppDownload = () => {
    useEffect(() => {
        AOS.init({duration: 1000, once: true});
    }, []);
  return <div className='app-download'>
      <p data-aos="zoom-in">For Better Experience Download <br/><span className='text-[#f05a28]'>BiteDash</span> App</p>
      <div className='app-download-platform'>
          <img src={assets.play_store} alt="play-store" className='app-download-icon'/>
          <img src={assets.app_store} alt="app-store" className='app-download-icon'/>
      </div>
  </div>;
};

export default AppDownload;