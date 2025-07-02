import React from 'react';
import {assets} from "../assets/frontend_assets/assets.js";

const AppDownload = () => {
  return <div className='app-download'>
      <p>For Better Experience Download <br/><span className='text-[#f05a28]'>BiteDash</span> App</p>
      <div className='app-download-platform'>
          <img src={assets.play_store} alt="play-store" className='app-download-icon'/>
          <img src={assets.app_store} alt="app-store" className='app-download-icon'/>
      </div>
  </div>;
};

export default AppDownload;