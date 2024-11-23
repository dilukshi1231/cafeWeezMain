const express = require('express');
const router = express.Router();
const OnlineOrder = require('../models/onlineOrderModel');

// Fetch all online orders
router.get('/online-orders', async (req, res) => {
  try {
    const orders = await OnlineOrder.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching online orders', error });
  }
});

// Update online order status
router.put('/online-orders/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await OnlineOrder.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating online order status', error });
  }
});

module.exports = router;
