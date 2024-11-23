const mongoose = require('mongoose');

const inhouseOrderSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true
  },
  items: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'served'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('InhouseOrder', inhouseOrderSchema);
