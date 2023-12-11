const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login an existing user
router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    const token = jwt.sign({ sub: user._id }, 'your-secret-key', {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.json({ token });
  })(req, res, next);
});
  
  router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    // The user is authenticated and req.user contains user information
    res.json(req.user);
  });
  
  module.exports = router;