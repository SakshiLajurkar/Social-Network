const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

connectDB();
app.set('view engine', 'ejs');
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/posts', require('./routes/api/posts'));
// app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Welcome to port ${PORT}`));
