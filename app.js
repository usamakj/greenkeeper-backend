require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Greenkeeper Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
