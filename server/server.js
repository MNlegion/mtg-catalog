const express = require('express');
const passport = require('passport');
const authRoutes = require('./routes/api/authRoutes');
const cardRoutes = require('./routes/api/cardRoutes');
const connectDB = require('./config/connection');
// const Card = require('./models/cardModel'); Do I need this?

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Use JSON middleware
app.use(express.json());
app.use(passport.initialize());
require('./passport-config');

// Use auth routes
app.use('/auth', authRoutes);
// Use card routes
app.use('/api/cards', cardRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
