const Post = require('../models/post');

exports.createPost = async(req, res) => {
    try {
        // The req also has an comment array and post array
        const { title, body } = req.body;

        const post = await Post.create({ title, body });

        res.status(200).json(
            {
                success: true,
                data: post,
                message: 'Successfully create a post'
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