const express = require('express');
const Food = require('../models/Food');
const protect = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

// Add food (Admin only)
router.post('/add', protect, roleMiddleware(['admin']), async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const newFood = new Food({ name, description, price, imageUrl });
  await newFood.save();
  res.status(201).json({ message: 'Food added' });
});

// Get all foods (All users)
router.get('/menu', async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

module.exports = router;
