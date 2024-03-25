const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.post("/api/cars", (req, res) => {
    console.log(req.body);
    res.send("Cars submitted successfully");
})

app.listen(PORT, (err) => {
    if(err) console.error(err);
    console.log(`The server is listening to PORT ${PORT}`);
})

