'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _index = require('./handlers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)({});

function routes(app) {
  app.get('/', _index.introHandler);
  app.post('/upload', upload.single('attachment'), _index.uploadHandler);
};