const express = require('express')
router = express.Router()

const { getAllPost, getPostById } = require('../controller/getPost');
const { createPost } = require('../controller/createPost');

router.post('/create', createPost);
router.get('/get', getAllPost);
router.get('/get/:id', getPostById);

module.exports = router;