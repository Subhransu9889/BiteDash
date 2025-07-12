import userModel from "../models/UserModel.js";

//add items to user carts
const addItemToCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: cartData});
        res.status(200).json({success: true, message: 'Item added to cart successfully'});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'User not found'});
    }
}

//remove items from user cart
const removeItemFromCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
            await userModel.findByIdAndUpdate(req.body.userId, {cartData: cartData});
            return res.status(200).json({success: true, message: 'Item removed from cart successfully'});
        }
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'User not found'});
    }
}

//fetch user cart data
const fetchCartData = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        return res.status(200).json({success: true, data: cartData});
    } catch (error){
        console.log(error);
        return res.status(400).json({success: false, message: 'User not found'});
    }
}

export {
    addItemToCart, removeItemFromCart, fetchCartData,
}