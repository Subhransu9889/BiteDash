import React, {useContext, useEffect} from 'react';
import Navbar from "../components/Navbar.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {StoreContext} from "../context/StoreContext.jsx";
import axios from "axios";

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    const verifyPayment = async () => {
        const res = await axios.post(`${url}/api/order/verify`, {success, orderId});
        if(res.data.success){
            navigate('/myorders');
        }
        else{
            navigate('/');
        }
    }
    useEffect(() => {
        verifyPayment();
    }, []);
  return <div>
      <div className='bg-[var(--color-gray-900)] rounded-full flex flex-col items-center !pb-4'>
          <Navbar/>
      </div>
      <div className='verify'>
          <div className='spinner'></div>
      </div>
  </div>;
};

export default Verify;