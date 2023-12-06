const express = require('express');
const connectDB = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Use JSON middleware
app.use(express.json());


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
