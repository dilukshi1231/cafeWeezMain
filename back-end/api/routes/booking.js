// routes/booking.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.post('/book', async (req, res) => {
  try {
    const { name, email, phone, date, time, persons, message } = req.body;

    const newBooking = new Booking({
      name,
      email,
      phone,
      date,
      time,
      persons,
      message,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
