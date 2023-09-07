import express from 'express';
import { getTagsData } from '../utils/dataUtility.js';

const router = express.Router();

// GET /api/tags/:name
// Params:
// - name (string, optional): The name of the tag to find posts for
// Returns a list of posts with the specified tag name, or an error if no tag name is provided
router.get('/:name?', async (req, res) => {
    const tagName = req.params.name;

    if (!tagName) {
        return res.status(400).json({ error: 'Tag name is missing in the request URL.' });
    }

    const postsWithTag = await getTagsData(tagName);

    if (!postsWithTag.length) {
        return res.status(404).json({ error: 'No posts found with this tag.' });
    }

    return res.json({ data: postsWithTag });
});


export default router;
