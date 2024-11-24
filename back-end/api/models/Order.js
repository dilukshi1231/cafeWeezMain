const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
    quantity: Number,
  }],
  status: { type: String, default: 'pending' },
  totalAmount: Number,
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
