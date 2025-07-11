import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vsyff97.mongodb.net/bitedash`).then(() => console.log('MongoDB Connected...'));
    } catch (err){
        console.log(err);
        process.exit(1);
    }
}