import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/server.js';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Tags API', () => {
    it('should return posts with a specific tag', (done) => {
        chai.request(server)
            .get('/api/tags/Sports')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            });
    });

});
