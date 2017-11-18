'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import form from '../../templates/form.html';
var form = require('/form.html');
function introHandler(req, res) {
  res.sendFile(form);
}

exports.introHandler = introHandler;