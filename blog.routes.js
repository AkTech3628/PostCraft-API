const express = require('express')
const router = express.Router()

const { createblog, getallBlogs } =
require('../controllers/blog.controllers')

const authMiddleware =
require('../middleware/auth.middleware')

router.post('/create', authMiddleware, createblog)
router.get('/all', getallBlogs)

module.exports = router
