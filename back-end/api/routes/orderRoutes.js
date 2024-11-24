const express = require('express');
const Order = require('../models/Order');
const Food = require('../models/Food');
const User = require('../models/User');
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

// Place an order (Customer only)
router.post('/order', protect, roleMiddleware(['customer']), async (req, res) => {
  const { items } = req.body;
  let totalAmount = 0;
  
  for (let i = 0; i < items.length; i++) {
    const food = await Food.findById(items[i].foodId);
    totalAmount += food.price * items[i].quantity;
  }

  const order = new Order({
    customerId: req.user._id,
    items,
    totalAmount,
  });
  await order.save();
  res.status(201).json({ message: 'Order placed', order });
});

// View orders (Waiter only)
router.get('/orders', protect, roleMiddleware(['waiter', 'admin']), async (req, res) => {
  const orders = await Order.find().populate('customerId');
  res.json(orders);
});

// View total earnings (Admin only)
router.get('/earnings', protect, roleMiddleware(['admin']), async (req, res) => {
  const totalEarnings = await Order.aggregate([
    { $group: { _id: null, total: { $sum: '$totalAmount' } } },
  ]);
  res.json({ totalEarnings: totalEarnings[0]?.total || 0 });
});

module.exports = router;
