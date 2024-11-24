const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv').config();
const authRoutes = require('./api/routes/authRoutes');
const foodRoutes = require('./api/routes/foodRoutes');
const orderRoutes = require('./api/routes/orderRoutes');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3001;
require("dotenv");


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5174', credentials: true }));



mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(() => console.log("Successfuly connect to the Mongodb"))
  .catch((error) => console.log("Mongodb error"));

const menuRoutes = require('./api/routes/menuRoutes')

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/orders', orderRoutes);



app.use('/menu',menuRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
