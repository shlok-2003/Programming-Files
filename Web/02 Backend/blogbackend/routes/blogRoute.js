const express = require('express')
const router = express.Router()

const { createPost } = require('../controller/createPost')
const { getPost } = require('../controller/getPost')

router.post("/create", createPost)
router.get("/post", getPost)

module.exports = router