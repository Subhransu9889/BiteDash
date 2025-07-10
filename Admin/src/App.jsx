import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/SIdebar.jsx";
import {Route, Routes} from "react-router-dom";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Orders from "./pages/Orders.jsx";

const App = () => {
  return <div>
    <Navbar/>
    <hr/>
    <div className='app-content'>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
    </div>
  </div>;
};

export default App;