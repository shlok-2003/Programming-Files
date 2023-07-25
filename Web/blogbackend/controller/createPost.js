const { Post } = require('../models/blog')

exports.createPost = async(req, res) => {
    try {
        const { title, description } = req.body

        const post = await Post.create({ title, description })
        
        res.status(200).json({
            success: true,
            data: post,
            message: "Post created successfully"
        })
    }
    catch(err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}