import { getPostByIdData, getCommentsData } from '../utils/dataUtility.js';

// Middleware to validate if a post exists given its ID
export const validatePostExists = async (req, res, next) => {
    const postId = parseInt(req.params.id);
    const post = await getPostByIdData(postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    req.post = post;
    next();
}

// Middleware to validate if comments exist for a given post ID
export const validateCommentsExist = async (req, res, next) => {
    const postId = parseInt(req.params.id);
    const comments = await getCommentsData(postId);

    if (!comments.length) {
        return res.status(404).json({ error: 'No comments found for this post' });
    }

    req.comments = comments;
    next();
}
