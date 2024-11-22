const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contact"); // Assuming your Contact model is in the models folder


const app = express();
app.use(express.json()); // Middleware to parse JSON data

// Connect to the database
connectDB();

// POST route for handling contact form submissions
app.post("/contact", async (req, res) => {
  const { fullname, email, message } = req.body;

  try {
    // Create a new contact entry
    await Contact.create({ fullname, email, message });

    // Send success response
    res.status(200).json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return res.status(400).json({ msg: errorList });
    } else {
      // Handle other errors
      return res.status(500).json({ msg: ["Unable to send message."] });
    }
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
