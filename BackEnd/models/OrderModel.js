import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    foods: {type: Array, required: true},
    totalPrice: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: 'Pending'},
    date: {type: Date, default: Date.now()},
    paymentMethod: {type: Boolean, default: false},
});

const orderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default orderModel;