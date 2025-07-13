import express from 'express';
import cors from 'cors';
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/FoodRoutes.js";
import userRouter from "./routes/UserRoutes.js";
import cartRouter from "./routes/CartRoutes.js";
import orderRouter from "./routes/OrderRoutes.js";

// app config
const app = express();
const port = 3000;


// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);

app.use('/api/cart', cartRouter);

app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Hello From BiteDash Server');
})


app.listen(port, () => console.log(`Server is running on port ${port}`));