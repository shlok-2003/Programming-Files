const Comment = require('../models/comment');
const Post = require('../models/post');

exports.createComment = async(req, res) => {
    try {
        const { body, postId } = req.body;

        const comment = await Comment.create({ body, post: postId });
        const getPost = await Post.findById({ _id: postId });

        getPost.comment.push(comment._id);
        res.status(200).json(
            {
                success: true,
                data: comment,
                message: 'Successfully create a comment'
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