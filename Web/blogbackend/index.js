const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/database')
const blogRoutes = require('./routes/blogRoute')
const PORT = process.env.PORT || 3000

// Configuration
dotenv.config()
const app = express()

app.use(express.json())
app.use('/post', blogRoutes)


app.listen(PORT, (err) => {
    if(err) console.error(err)
    console.log(`Server connected at port: ${PORT}`)
})

dbConnect()

app.get('/', (req, res) => {
    res.send("<h1>This is the staring page</h1>")
})