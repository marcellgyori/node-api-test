import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read data from a JSON file and return it as a JavaScript object
export const getDataAsJSON = async (filePath = path.join(__dirname, '..', 'data.json')) => {
    let raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
};

// Function to get all the posts data
export const getPostsData = async () => {
    try {
        const data = await getDataAsJSON();
        return data.posts;
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

// Function to get a specific post by its ID
// Params:
// - id (integer): ID of the post to retrieve
export const getPostByIdData = async (id) => {
    try {
        const posts = await getPostsData();
        return posts.find(post => post.id === id);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

// Function to get all comments related to a specific post
// Params:
// - postId (integer): ID of the post to find comments for
export const getCommentsData = async (postId) => {
    try {
        const data = await getDataAsJSON();
        return data.comments.filter(comment => comment.post_id === postId);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

// Function to get all posts that have a specific tag
// Params:
// - tagName (string): Name of the tag to find posts for
export const getTagsData = async (tagName) => {
    try {
        const posts = await getPostsData();
        return posts.filter(post => post.tags.includes(tagName));
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
