import {createContext, useEffect, useState} from "react";
import {food_list} from "../assets/frontend_assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = 'http://localhost:3000';
    const [token, setToken] = useState('');
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]: 1}))
        } else {
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }

    const getAllCartAmount = () => {
        let total = 0;
        for(let itemId in cartItems){
            if(cartItems[itemId]>0){
                total += food_list.find(item => item._id.toString() === itemId.toString()).price * cartItems[itemId];
            }
        }
        return total;
    }
    const contextValue = {
     food_list, cartItems, addToCart, removeFromCart, getAllCartAmount, url, token, setToken,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;