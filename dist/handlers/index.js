'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intro = require('./intro/intro.handler');

Object.keys(_intro).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _intro[key];
    }
  });
});

var _upload = require('./upload/upload.handler');

Object.keys(_upload).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _upload[key];
    }
  });
});