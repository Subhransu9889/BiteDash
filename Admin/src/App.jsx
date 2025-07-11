import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/SIdebar.jsx";
import {Route, Routes} from "react-router-dom";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Orders from "./pages/Orders.jsx";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = 'http://localhost:3000';
  return <div>
    <ToastContainer/>
    <Navbar/>
    <hr/>
    <div className='app-content'>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add url={url}/>}></Route>
        <Route path='/list' element={<List url={url}/>}></Route>
        <Route path='/orders' element={<Orders url={url}/>}></Route>
      </Routes>
    </div>
  </div>;
};

export default App;