const express = require('express');
const router = express.Router();

const { getAllLike, getLikeByPost } = require('../controller/getLike');
const { createLike } = require('../controller/createLike');

router.post('/create', createLike);
router.get('/get', getAllLike);
router.get('/get/:postId', getLikeByPost);

module.exports = router;