"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import form from '../../templates/form.html';
// const form = require('./form.html');
function introHandler(req, res) {
  res.send("\n  <form action=\"/upload\" method=\"POST\" enctype=\"multipart/form-data\">\n    <input type=\"file\" name=\"attachment\">\n    <input type=\"submit\" value=\"Upload file\">\n  </form>");
}

exports.introHandler = introHandler;