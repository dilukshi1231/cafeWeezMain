const express = require('express');
const { registerUser, loginUser, getUsers, updateUser, deleteUser, checkAuthentication , googleLogin}  = require('../controllers/userController');

const router = express.Router();

router.post('/google-login', googleLogin);

// Route for registering a user
router.post('/register', registerUser);

// Route for logging in a user
router.post('/login', loginUser);

// Route for getting all users
router.get('/users', getUsers);

// Route for updating a user
router.put('/users/:id', updateUser);

// Route for deleting a user
router.delete('/users/:id', deleteUser);

router.get('/check-auth', checkAuthentication); // Check authentication via cookies

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from the Authorization header
    if (!token) return res.status(403).send("Token required");
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).send("Invalid token");
      req.user = user;
      next();
    });
  };
  

// Route to get user data (email, profile picture)
router.get('/user', authenticateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id); // Assuming the user ID is in the JWT token
      if (!user) return res.status(404).send("User not found");
  
      res.json({
        email: user.email,
        profilePicture: user.profilePicture || '/default-profile.png', // Provide default image if not available
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  
  module.exports = router;

module.exports = router;
