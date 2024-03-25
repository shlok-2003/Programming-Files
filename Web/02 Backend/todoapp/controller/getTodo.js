// import the model
const Todo = require("../models/todo");

// define route handler
exports.getTodo = async(req, res) => {
    try {
        // fetch all todo item 
        const todos = await Todo.find({  })

        // success response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo data is fetched",
        })
    }
    catch(err) {
        console.error(err)

        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}

exports.getTodoById = async(req, res) => {
    try {
        // fetch one todo item
        const id = req.params.id
        const todo = await Todo.findById({ _id: id })

        if(!todo) {
            res.status(400).json({
                success: false, 
                message: "No data found",
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo item with id ${id} is fetched`
        })
    }
    catch(err) {
        console.error(err)

        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}