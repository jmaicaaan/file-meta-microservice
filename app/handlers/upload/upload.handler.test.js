const assert = require('assert');
const app = require('../../../dist/index');
const server = require('supertest');

describe('upload', () => {
  describe('#server', () => {
    afterEach(() => {
      app.close();
    });
    it('should be able to access root /', done => {
      server(app)
        .get('/')
        .expect(200, done);
    });
    it('should be able to upload file and view file size', done => {
      let filenameWithExt = 'upload.handler.test.js';
      let file = __dirname + '/' + filenameWithExt;
      server(app)
        .post('/upload')
        .attach('attachment', file)
        .expect(200)
        .end((err, res) => {
          assert.equal(res.body.hasOwnProperty('size'), true);
          assert.equal(res.body.filename, filenameWithExt);
          done(err);
        });
    });
  });
});