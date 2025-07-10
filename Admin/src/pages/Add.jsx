import React, {useState} from 'react';
import {assets} from "../assets/admin_assets/assets.js";

const Add = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Veg',
        ratting: '4.5'
    })

  return <div className='add'>
      <form className='add-form'>
          <div className='add-img-upload'>
              <p>Upload Image</p>
              <label htmlFor='image' className='cursor-pointer'>
                  <img src={image? URL.createObjectURL(image) :assets.upload_area} alt="upload_area" className='add-img-upload-icon'/>
              </label>
              <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required/>
          </div>
          <div className='add-product-name'>
              <p>Product Name: </p>
              <input type='text' placeholder='Enter Product Name' required className='border !p-1 rounded-md'/>
          </div>
          <div className='add-product-description flex-col'>
              <p>Product Description: </p>
              <textarea name='description' rows='6' placeholder='Enter Product Description' required className='border !p-1 rounded-md'/>
          </div>
          <div className='add-category-price'>
              <div className='add-category'>
                  <p>Category: </p>
                  <select name='category' required className='p-3 max-w-[120px]'>
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
                  <input type='number' placeholder='Enter Price (e.g. ₹ 120)' required className='border !p-1 rounded-md'/>
              </div>
          </div>
          <div className='add-ratting'>
              <p>Ratting: </p>
              <input type='number' placeholder='Enter Ratting (e.g. 4.5)' required className='border !p-1 rounded-md w-full md:w-[22%]' max={5} min={1}/>
          </div>
          <button type='submit' className='add-button'>Add Product</button>
      </form>
  </div>;
};

export default Add;