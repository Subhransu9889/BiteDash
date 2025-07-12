import express from 'express';
import {addItemToCart, removeItemFromCart, fetchCartData} from "../controllers/CartController.js";
const cartRouter = express.Router();
import authMiddleware from "../middleware/auth.js";

cartRouter.post('/add',authMiddleware, addItemToCart);
cartRouter.post('/remove',authMiddleware, removeItemFromCart);
cartRouter.post('/list',authMiddleware, fetchCartData);

export default cartRouter;