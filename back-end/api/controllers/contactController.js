const Contacts = require("../models/contact");
const mongoose = require("mongoose");

// Get all contact submissions
const getAllContactSubmissions = async (req, res) => {
  try {
    // Get all contact submissions
    const contacts = await Contacts.find().sort({ date: -1 });

    // Send success response
    res.status(200).json({
      contacts,
      success: true,
    });
  } catch (error) {
    // Handle errors
    return res
      .status(500)
      .json({ msg: ["Unable to fetch contact submissions."] });
  }
};

// Add contact submission
const addContactSubmission = async (req, res) => {
  const { fullname, email, message } = req.body;
  try {
    // Create a new contact entry
    await Contacts.create({ fullname, email, message });

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
};

module.exports = {
  addContactSubmission,
  getAllContactSubmissions,
};
