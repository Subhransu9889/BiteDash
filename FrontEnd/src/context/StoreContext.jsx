import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = 'http://localhost:3000';
    const [token, setToken] = useState('');
    const [food_list, setFoodList] = useState([]);
    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]: 1}))
        } else {
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+'/api/cart/add', {itemId}, {headers:{token}});
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
        if(token){
            await axios.post(url+'/api/cart/remove', {itemId}, {headers:{token}});
        }
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

    const fetchFoodList = async () => {
        const res = await axios.get(url+'/api/food/list');
        setFoodList(res.data.data);
    }

    const loadCartItems = async (token) => {
        const res = await axios.post(url+'/api/cart/list', {}, {headers:{token}});
        setCartItems(res.data.data);
    }
    useEffect(() => {
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem('BiteDash_token')){
                setToken(localStorage.getItem('BiteDash_token'));
                await loadCartItems(localStorage.getItem('BiteDash_token'));
            }
        }
        loadData();
    }, []);
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