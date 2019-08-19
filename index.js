const express = require('express');
const connectDB = require('./db/db');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

app.use(express.json({extended: false}));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));