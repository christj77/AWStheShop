// Backend code in Node.js/Express
const express = require('express');
const router = express.Router();
import User from '../models/user'; // Import the User model

// Handle user registration
router.post('api/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Create a new user instance using the User model
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
       
    });

    // Save the user to MongoDB
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
