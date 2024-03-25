const express = require('express');
const dotenv = require('dotenv');

// Required files
const dbConnect = require('./config/database');
const post = require('./routes/post');
const comment = require('./routes/comment');
const like = require('./routes/like');

// Configuration
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use('/post', post);
app.use('/comment', comment);
app.use('/like', like);


app.listen(PORT, (err) => {
    if(err) console.error(err)
    console.log(`Server connected at port: ${PORT}`)
});

dbConnect();

app.get('/', (req, res) => {
    res.send("<h1>This is the staring page</h1>");
})