'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var server = require('supertest');

describe('upload', function () {
  describe('#server', function () {
    afterEach(function () {
      app.close();
    });
    it('should be able to access root /', function (done) {
      server(app).get('/').expect(200, done);
    });
    it('should be able to upload file and view file size', function (done) {
      var filenameWithExt = 'upload.handler.test.js';
      var file = __dirname + '/' + filenameWithExt;
      server(app).post('/upload').attach('attachment', file).expect(200).end(function (err, res) {
        assert.equal(res.body.hasOwnProperty('size'), true);
        assert.equal(res.body.filename, filenameWithExt);
        done(err);
      });
    });
  });
});