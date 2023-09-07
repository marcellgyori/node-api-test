import { expect } from 'chai';
import { validatePostExists, validateCommentsExist } from '../../src/middlewares/validate.js';

describe('Validation Middlewares', () => {
    it('should validate post existence', (done) => {
        const req = {
            params: { id: 99999 }
        };
        const res = {
            status: (code) => {
                expect(code).to.equal(404);
                return {
                    json: (data) => {
                        expect(data).to.have.property('error', 'Post not found');
                        done();
                    }
                };
            },
            send: () => {
                done(new Error('Middleware did not send expected 404 response'));
            }
        };

        validatePostExists(req, res, () => {
            done(new Error('Middleware did not send any response'));
        });
    });


    it('should validate comments existence', (done) => {
        const req = {
            params: { id: 99999 }
        };
        const res = {
            status: (code) => {
                expect(code).to.equal(404);
                return {
                    json: (data) => {
                        expect(data).to.have.property('error', 'No comments found for this post');
                        done();
                    }
                };
            }
        };

        validateCommentsExist(req, res, () => { });
    });

});
