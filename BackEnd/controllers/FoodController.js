import FoodModel from "../models/FoodModel.js";
import fs from "fs";

//add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
        rating: 4.5,
    })
    try{
        await food.save();
        res.status(201).json({success: true, message: 'Food added successfully'});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'Food not added'});
    }
}

// all food list
const listFood = async (req, res) => {
    try{
        const food_list = await FoodModel.find({});
        res.status(200).json({success: true, data: food_list});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'Food not found'});
    }
}

//  remove food items
const removeFood = async (req, res) => {
    try{
        const food = await FoodModel.findById(req.body.id);
        fs.unlinkSync(`uploads/${food.image}`, () => {});

        await FoodModel.findByIdAndDelete(req.body.id);
        res.status(200).json({success: true, message: 'Food removed successfully'});
    } catch (error){
        console.log(error);
        res.status(400).json({success: false, message: 'Food not removed'});
    }
}

export {
    addFood, listFood, removeFood,
}