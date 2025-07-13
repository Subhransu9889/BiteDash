import orderModel from "../models/OrderModel.js";
import userModel from "../models/UserModel.js";
import {Stripe} from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
    try{
        const newOrder = new orderModel({
            userId: req.body.userId,
            foods: req.body.foods,
            totalPrice: req.body.totalPrice,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}});
        const line_foods = req.body.foods.map((food) => (
            {
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: food.name
                    },
                    unit_amount: food.price * 100
                },
                quantity: food.quantity
            }
        ))

        line_foods.push({
            price_data: {
                currency: 'INR',
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: 99 * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_foods,
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${process.env.FRONTEND_URL}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({
            success: true,
            session_url: session.url,
        })
    } catch (error){
        console.log(error);
        res.json({
            success: false,
            message: 'Order not placed',
        })
    }
}

// temp varify
const verifyOrder = async (req, res) => {
    const {orderId, success} = req.body;
    try{
        if(success === 'true'){
            await orderModel.findByIdAndUpdate(orderId, {paymentMethod: 'true'});
            res.status(200).json({
                success: true,
                message: 'Successfully verified',
            })
        }
        else{
            await orderModel.findOneAndDelete(orderId);
            res.status(200).json({
                success: false,
                message: 'Order not verified',
            })
        }
    } catch (error){
        console.log(error);
        res.json({success: false, message: 'Order not verified'});
    }
}

// user orders for frontend
const userOrders = async (req, res) => {
    try{
        const orders = await orderModel.find({userId: req.body.userId});
        res.status(200).json({success: true, data: orders});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'User not found'});
    }
}

// listing orders form admin panel
const listOrders = async (req, res) => {
    try{
        const orders = await orderModel.find({});
        res.status(200).json({success: true, data: orders});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'User not found'});
    }
}

// api for updating order status
const updateOrderStatus = async (req, res) => {
    try{
        const order = await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status});
        res.status(200).json({success: true, message: 'Order status updated successfully'});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'Order not found'});
    }
}

export {
    placeOrder, verifyOrder, userOrders, listOrders, updateOrderStatus,
}

