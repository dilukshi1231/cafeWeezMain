const express = require('express');
const router = express.Router();
const InhouseOrder = require('../models/inhouseOrderModel');

// Fetch all in-house orders
router.get('/inhouse-orders', async (req, res) => {
  try {
    const orders = await InhouseOrder.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching in-house orders', error });
  }
});

// Update in-house order status
router.put('/inhouse-orders/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await InhouseOrder.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating in-house order status', error });
  }
});

module.exports = router;
