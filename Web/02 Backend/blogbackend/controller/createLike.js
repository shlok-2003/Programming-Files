const Like = require('../models/like');
const Post = require('../models/post');

exports.createLike = async(req, res) => {
    try {
        const { postId, user } = req.body;

        const post = await Post.findById({ _id: postId });
        if(!post) {
            res.status(400).json(
                {
                    success: false,
                    message: 'Post not found'
                }
            )
        }

        const like = await Like.create({ postId, user });
        post.like.push(like._id);

        res.status(200).json(
            {
                success: true,
                data: like,
                message: 'Successfully create a like'
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