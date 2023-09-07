import express from 'express';
import { getPostsData, getPostByIdData } from '../utils/dataUtility.js';

const router = express.Router();

// GET /api/posts
// Returns a list of all posts
router.get('/', async (req, res) => {
    const posts = await getPostsData();
    res.json({ data: posts });
});

// GET /api/posts/:id
// Params:
// - id (integer): The ID of the post to retrieve
// Returns a single post by ID
router.get('/:id', async (req, res) => {
    const postId = parseInt(req.params.id);
    const post = await getPostByIdData(postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ data: post });
});

export default router;
