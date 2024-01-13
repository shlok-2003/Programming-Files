const Post = require('../models/post');

exports.getAllPost = async(req, res) => {
    try {
        const post = await Post.find({ })

        res.status(200).json({
            success: true,
            data: post,
            message: 'All Post are fetched',
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                data: 'Internal Server Error',
                message: err.message,
            }
        )
    }
};

exports.getPostById = async(req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById({ _id: id });

        if(!post) {
            res.status(400).json(
                {
                    success: false,
                    message: 'Post not found',
                }
            )
        }

        res.status(200).json(
            {
                success: true,
                data: post,
                message: 'Post is fetched',
            }
        )
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                data: 'Internal Server Error',
                message: err.message,
            }
        )
    }
}