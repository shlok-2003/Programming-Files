const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        user: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
            maxLength: 50,
        },
    }
);

module.exports = mongoose.model("Comment", commentSchema);