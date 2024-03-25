const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
)

const commentSchema = new mongoose.Schema(
    {
        user: {
            type: String, 
            required: true,
            maxLength: 50,
        },
        comment: {
            type: String, 
            required: true,
            maxLength: 50,
        },
        commentedOn: {
            type: String, 
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
)

const likeSchema = new mongoose.Schema(
    {
        user: {
            type: String, 
            required: true,
            maxLength: 50,
        },
        likeCount: {
            type: Number, 
            required: true,
        },
        likedOn: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
)

const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Like = mongoose.model('Like', likeSchema)

module.exports = { Post, Comment, Like }