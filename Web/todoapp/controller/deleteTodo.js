const Todo = require("../models/todo");

exports.deleteTodo = async(req, res) => {
    try {
        const id = req.params.id

        const todo = await Todo.findByIdAndDelete({ _id: id })

        if(!todo) {
            res.status(400).json({
                success: false,
                message: "Cannot delete the data"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Data deleted successfully"
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