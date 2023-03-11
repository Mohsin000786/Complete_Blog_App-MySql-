const express = require('express');
const { getPosts, getPost, addPost, updatePost, deletePost  } = require('../controller/postController.js');

const router = express.Router();

router.get('/', getPosts)
router.get('/:id', getPost)

router.post('/', addPost)

router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router;