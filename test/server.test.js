import { expect } from 'chai';
import server from '../src/server.js';


describe('Server Startup', function () {
    before(done => {
        server.listen(3000, done);
    });

    after(done => {
        server.close(done);
    });

    it('should start server on expected port', () => {
        expect(server.address().port).to.equal(3000);
    });
});
