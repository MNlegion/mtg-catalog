const express = require('express');
const passport = require('passport');
const authRoutes = require('./routes/api/authRoutes');
const cardRoutes = require('./routes/api/cardRoutes');
const connectDB = require('./config/connection');

const cors = require('cors');
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
};

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Use JSON middleware
app.use(express.json());
app.use(passport.initialize());
require('./passport-config');
app.use(cors(corsOptions)) // Use this after the variable declaration

// Use auth routes
app.use('/auth', authRoutes);
// Use card routes
app.use('/api/cards', cardRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
