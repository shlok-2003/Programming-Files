const dbConnect = require('./config/database');

const todoRoutes = require('./routes/todos');

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middleware to parse JSON body
app.use(express.json());
//mount the todo api
app.use('/api/v1', todoRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`Server started as ${PORT}`)
})

dbConnect();

//default route
app.get('/', (req, res) => {
    res.send("<h1>This is the homePage</h1>")
})
