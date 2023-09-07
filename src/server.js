import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
import postsRouter from './routes/posts.js';
import commentsRouter from './routes/comments.js';
import tagsRouter from './routes/tags.js';

app.use('/api/posts', postsRouter);
app.use('/api/posts', commentsRouter);
app.use('/api/tags', tagsRouter);

// Error Handling
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send({ error: 'An internal error occurred!' });
});

// Starting the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server;
