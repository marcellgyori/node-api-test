import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Posts API', () => {
    it('should return a list of posts', (done) => {
        chai.request(server)
            .get('/api/posts')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            });
    });

    it('should return a single post by ID', (done) => {
        chai.request(server)
            .get('/api/posts/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.have.property('id', 1);
                done();
            });
    });

});
