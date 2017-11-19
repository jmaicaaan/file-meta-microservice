'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function uploadHandler(req, res) {
  var file = req.file;
  if (file) {
    return res.send({ size: file.size, filename: file.originalname });
  }
  return res.send('No file submitted');
}

exports.uploadHandler = uploadHandler;