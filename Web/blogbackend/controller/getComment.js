const Comment = require('../models/comment');

exports.getAllComment = async(req, res) => {
    try {
        const comment = await Comment.find({  });

        res.status(200).json(
            {
                success: true,
                data: comment,
                message: 'Successfully get all comment'
            }
        )
    }
    catch(err) {
        console.error(err);
        console.log(err);

        res.status(500).json(
            {
                success: false,
                message: 'Internal server error'
            }
        )
    }
}

exports.getCommentByPost = async(req, res) => {
    try {
        const postId = req.params.postId;

        const comment = await Comment.findById({ post: postId });

        res.status(200).json(
            {
                success: true,
                data: comment,
                message: 'Successfully get the comment'
            }
        )
    }
    catch(err) {
        console.error(err);
        console.log(err);

        res.status(500).json(
            {
                success: false,
                message: 'Internal server error'
            }
        )
    }
}