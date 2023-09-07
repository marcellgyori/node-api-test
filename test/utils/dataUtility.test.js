import { expect } from 'chai';
import {
    getDataAsJSON,
    getPostsData,
    getPostByIdData,
    getCommentsData,
    getTagsData,
} from '../../src/utils/dataUtility.js';


describe('Data retrieval tests', () => {
    describe('getDataAsJSON', () => {
        it('should return a valid JSON object', async () => {
            const data = await getDataAsJSON();
            expect(data).to.be.an('object');
        });
    });

    describe('getPostsData', () => {
        it('should return an array of posts', async () => {
            const data = await getPostsData();
            expect(data).to.be.an('array');
            expect(data[0]).to.have.property('id');
        });
    });

    describe('getPostByIdData', () => {
        it('should return a post by ID', async () => {
            const post = await getPostByIdData(1);
            expect(post).to.be.an('object');
            expect(post).to.have.property('id', 1);
        });

        it('should return undefined for non-existent ID', async () => {
            const post = await getPostByIdData(99999);
            expect(post).to.be.undefined;
        });
    });

    describe('getCommentsData', () => {
        it('should return comments for a post ID', async () => {
            const comments = await getCommentsData(1);
            expect(comments).to.be.an('array');
        });

        it('should return an empty array for a non-existent post ID', async () => {
            const comments = await getCommentsData(99999);
            expect(comments).to.be.an('array').that.is.empty;
        });
    });

    describe('getTagsData', () => {
        it('should return posts for a valid tag name', async () => {
            const posts = await getTagsData('Business');
            expect(posts).to.be.an('array');
        });

        it('should return an empty array for a non-existent tag name', async () => {
            const posts = await getTagsData('nonExistentTagName');
            expect(posts).to.be.an('array').that.is.empty;
        });
    });
});
