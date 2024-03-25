const express = require('express');
const file_upload = require('express-fileupload');
require('dotenv').config();

const dbConnect = require('./config/database');
const cloudinaryConnect = require('./config/cloudinary');
const fileUpload = require('./routes/file');

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    file_upload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);
app.use('/api/v1/upload', fileUpload);

dbConnect.connect();
cloudinaryConnect.connect();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }

    console.log(`Server is running on PORT ${PORT}`);
});
