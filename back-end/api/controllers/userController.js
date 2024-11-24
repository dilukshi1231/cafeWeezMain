const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const axios = require('axios'); // Import axios for making HTTP requests
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
require('dotenv').config();

const secretKey = process.env.JWT_SECRET_KEY;

if (!secretKey) {
  console.error('JWT secret key is missing');
  process.exit(1); // Exit if no secret key is defined
}

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

    // Optional: Check if the username already exists
    if (userName) {
      const existingUserName = await User.findOne({ userName });
      if (existingUserName) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
    }

    // Hash the password and create the user
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = new User({
      firstName,
      lastName,
      email,
      userName,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Login User with Cookie Handling
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });

    // Set the token in a secure, HTTP-only cookie
    res.cookie('authToken', token, {
      httpOnly: true,         // Accessible only by the web server
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'strict',     // Protect against CSRF
      maxAge: 3600000,        // 1 hour in milliseconds
    });

    res.json({ message: 'Login successful', role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Google login 
exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // Your Google Client ID
    });
    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    // Find or create the user in the database
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1] || '',
        email,
        picture,
      });
      await user.save();
    }

    // Generate JWT token for the user
    const authToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    // Send the response with the JWT and user role
    res.json({
      token: authToken,
      role: user.role,
    });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(500).json({ message: 'Google login failed. Please try again.' });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude passwords
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Could not retrieve users.' });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, role } = req.body;

  try {
    let updatedFields = { firstName, lastName, email, role };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedFields.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true, runValidators: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Could not update user.' });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Could not delete user.' });
  }
};

// Check Authentication
exports.checkAuthentication = (req, res) => {
  const token = req.cookies.authToken; // Read the token from cookies
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    res.status(200).json({ message: 'Authenticated', user: decoded });
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
