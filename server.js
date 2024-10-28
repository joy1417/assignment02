const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// MongoDB connection (with your username and password)
mongoose.connect('mongodb+srv://JoyGandhi:Joy%401417@joy.mdkgx.mongodb.net/?retryWrites=true&w=majority&appName=Joy', 
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Import routes
const contactRoutes = require('./backend/routes/contactRoutes');
const userRoutes = require('./backend/routes/userRoutes');

// Use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Backend!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

