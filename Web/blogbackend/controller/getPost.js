const { Post } = require('../models/blog')

exports.getPost = async(req, res) => {
    try {
        const post = await Post.find({ })

        res.status(200).json({
            success: true,
            data: post,
            message: "Post fetched successfully"
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