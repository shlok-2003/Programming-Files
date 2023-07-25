const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()


const dbConnect = () => (
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewURLParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Database connected successfully"))
        .catch((err) => {
            console.error(err)
            console.log(err)
            process.exit(1)
        })
)

module.exports = dbConnect