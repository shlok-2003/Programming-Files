const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        body: {
            type: String,
            required: true,
            maxLength: 50,
        },
        comment: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            }
        ],
        like: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Like",
            }
        ],
    }
);

module.exports = mongoose.model("Post", postSchema);