import React, { useState} from 'react';
import {assets} from "../assets/admin_assets/assets.js";
import axios from "axios";
import {toast} from "react-toastify";

const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Chinese',
        rating: '4.5'
    });

    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('category', data.category);
        formData.append('rating', Number(data.rating));
        const res = await axios.post(`${url}/api/food/add`, formData);
        if(res.data.success){
            setData({
                name: '',
                description: '',
                price: '',
                category: 'Chinese',
                rating: '4.5'
            });
            setImage(false);
            toast.success(res.data.message);
        }
        else{
            toast.error(res.data.message);
        }
    }

  return <div className='add'>
      <form className='add-form' onSubmit={onSubmitHandler}>
          <div className='add-img-upload'>
              <p>Upload Image</p>
              <label htmlFor='image' className='cursor-pointer'>
                  <img src={image? URL.createObjectURL(image) :assets.upload_area} alt="upload_area" className='add-img-upload-icon'/>
              </label>
              <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required/>
          </div>
          <div className='add-product-name'>
              <p>Product Name: </p>
              <input onChange={onChangeHandler} value={data.name} name='name' type='text' placeholder='Enter Product Name' required className='border !p-1 rounded-md'/>
          </div>
          <div className='add-product-description flex-col'>
              <p>Product Description: </p>
              <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Enter Product Description' required className='border !p-1 rounded-md'/>
          </div>
          <div className='add-category-price'>
              <div className='add-category'>
                  <p>Category: </p>
                  <select name='category' onChange={onChangeHandler} value={data.category} required className='p-3 max-w-[120px]'>
                      <option value='Chinese'>Chinese</option>
                      <option value='Non-Veg'>Non-Veg</option>
                      <option value='Dessert'>Dessert</option>
                      <option value='Indian'>Indian</option>
                      <option value='Cake'>Cake</option>
                      <option value='Veg'>Veg</option>
                      <option value='South Indian'>South Indian</option>
                      <option value='Beverage'>Beverage</option>
                  </select>
              </div>
              <div className='add-price'>
                  <p>Price: </p>
                  <input type='number' onChange={onChangeHandler} value={data.price} name='price' placeholder='Enter Price (e.g. ₹ 120)' required className='border !p-1 rounded-md'/>
              </div>
          </div>
          <div className='add-ratting'>
              <p>Rating: </p>
              <input type='number' onChange={onChangeHandler} value={data.rating} name='rating' placeholder='Enter Ratting (e.g. 4.5)' step='0.1' required className='border !p-1 rounded-md w-full md:w-[22%]' max={5} min={1}/>
          </div>
          <button type='submit' className='add-button'>Add Product</button>
      </form>
  </div>;
};

export default Add;