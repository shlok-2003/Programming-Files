const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Successfully connected to database');
        })
        .catch((err) => {
            console.log("Error: ", err);
            process.exit(1);
        })
}