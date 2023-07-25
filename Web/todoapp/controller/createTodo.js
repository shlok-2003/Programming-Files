const Todo = require("../models/todo");

// define router handler
exports.createTodo = async (req, res) => {
    try {
        //extract title and description from request body
        const { title, description } = req.body;
        // create a new todo object and insert in DB
        const response = await Todo.create({ title, description });
        // send a json with success
        res.status(200).json (
            {
            success: true,
            data: response,
            message: 'Entry created Successfully'
            }
        )
    }
    catch(err) {
        console.error(err)
        console.log(err)
        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: err.message,
            }
        )
    }
}

