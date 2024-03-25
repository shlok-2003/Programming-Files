const Todo = require('../models/todo');

exports.updateTodo = async(req, res) => {
    try {
        const id = req.params.id
        const { title, description } = req.body

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title: title,
                description: description,
                updatedAt: Date.now(),
            }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: "Data updated successfully"
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