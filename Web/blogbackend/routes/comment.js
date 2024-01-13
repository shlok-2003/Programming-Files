const express = require('express');
const router = express.Router();

const { getAllComment, getCommentByPost } = require('../controller/getComment');
const { createComment } = require('../controller/createComment');

router.post('/create', createComment);
router.get('/get', getAllComment);
router.get('/get/:postId', getCommentByPost);

module.exports = router;