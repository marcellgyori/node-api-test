import express from 'express';
import { getCommentsData } from '../utils/dataUtility.js';

const router = express.Router();

// GET /api/posts/:id/comments
// Params:
// - id (integer): The ID of the post to get comments for
// Returns a list of comments for a specific post ID
router.get('/:id/comments', async (req, res) => {
    const postId = parseInt(req.params.id);
    const comments = await getCommentsData(postId);

    if (!comments.length) {
        return res.status(404).json({ error: 'No comments found for this post' });
    }

    res.json({ data: comments });
});

export default router;
