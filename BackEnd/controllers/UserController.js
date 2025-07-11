import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/UserModel.js";
import dotenv from "dotenv";
dotenv.config();

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({success: false, message: 'Invalid password'});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({success: true, message: 'User logged in successfully', token: token});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'User not found'});
    }
}

//register user
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const exist = await userModel.findOne({email});
        if(exist){
            return res.status(400).json({success: false, message: 'User already exist'});
        }
    //     validating email format and strong password
        if(!email || !validator.isEmail(email)){
            return res.status(400).json({success: false, message: 'Invalid email format'});
        }

        if(password.length < 6){
            return res.status(400).json({success: false, message: 'Password must be at least 6 characters'});
        }

    //     hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({success: true, message: 'User created successfully', token: token});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'User not created'});
    }
}

export {
    loginUser, registerUser,
}