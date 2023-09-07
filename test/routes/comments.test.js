import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Comments API', () => {
    it('should return comments for a post by ID', (done) => {
        chai.request(server)
            .get('/api/posts/1/comments')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            });

    });

});
