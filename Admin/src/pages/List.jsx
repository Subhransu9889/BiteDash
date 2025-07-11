import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`);
    console.log(res.data);
    if(res.data.success){
      setList(res.data.data);
    }
    else{
      toast.error(res.data.message);
    }
  }

  const removeItem = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`, {id: foodId});
    if(res.data.success){
      toast.success(res.data.message);
      await fetchList();
    }
    else{
      toast.error(res.data.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return <div className='list add'>
    <p>All Foods List</p>
    <div className='list table'>
      <div className='list-table-format title'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Rating</b>
        <b>Action</b>
      </div>
      {list.map((item, index) => (
        <div className='list-table-format' key={index}>
          <img src={`${url}/images/`+item.image} alt={item.name} className='rounded-full object-cover'/>
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.rating}</p>
          <button onClick={()=>removeItem(item._id)} className='list-table-button'>Delete</button>
        </div>
      ))}
    </div>
  </div>;
};

export default List;