const Like = require('../models/like');
const Post = require('../models/post');

exports.getAllLike = async(req, res) => {
    try {
        const like = await Like.find({  });

        res.status(200).json(
            {
                success: true,
                data: like,
                message: 'Successfully get all like'
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

exports.getLikeByPost = async(req, res) => {
    try {
        const postId = req.params.postId;

        const like = await Like.findById({ post: postId });
        const post = await Post.findById({ _id: postId });

        res.status(200).json(
            {
                success: true,
                data: {
                    like,
                    totalLike: post.like.length
                },
                message: 'Successfully get the like'
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